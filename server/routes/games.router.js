import axios from 'axios';
import { rejectUnauthenticated } from '../modules/authentication-middleware';
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

require('dotenv').config();

router.get('/', rejectUnauthenticated, (req, res) => {
    // GET user's game data from Steam API
  axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${req.user.steam_id}&format=json&include_appinfo=true`)
  .then(result => {
      const removeGamesQuery = `
      
      `
      const insertGamesQuery = `
      INSERT INTO library (steam_id, game_id, name, image, last_played, playtime_total, playtime_2wk);
      `
  })
  .catch(err => {
      console.log('Error getting user games', err);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;