const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

require('dotenv').config();

router.get('/', rejectUnauthenticated, (req, res) => {
    // GET user's game data from Steam API
  axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${req.user.steam_id}&format=json&include_appinfo=true`)
  .then(result => {
    console.log('fetching steam games for user', req.user.username);
    res.send(result.data);
  })
  .catch(err => {
      console.log('Error getting user games', err);
  })
});

module.exports = router;