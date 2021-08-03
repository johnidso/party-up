const { default: axios } = require('axios');
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

require('dotenv').config();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const email = req.body.email;
  const steam_id = req.body.steamId;
  const discord_id = req.body.discordId;

  const queryText = `INSERT INTO "users" (username, password, email, steam_id, discord_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool
    .query(queryText, [username, password, email, steam_id, discord_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
    
    // Get the user's profile data from steam and store it in steam-info table
    axios.get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${steam_id}`)
    .then((result) => {
      const personaName = result.data.response.players[0].personaname;
      const avatar = result.data.response.players[0].avatarfull;
      const profileUrl = result.data.response.players[0].profileurl;
      const addSteamInfoQuery = `
      INSERT INTO "steam-info" (steam_id, avatar, persona, profile_url)
      VALUES ($1, $2, $3, $4) RETURNING id;
      `;
      pool.query(addSteamInfoQuery, [steam_id, avatar, personaName, profileUrl])
      .then(console.log('Steam user data added'))
      .catch((err) => {
      console.log('Add Steam user data failed:', err);
    });
    })
    .catch(err => {
      console.log('Error getting player summary from steam', err);
    })
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
