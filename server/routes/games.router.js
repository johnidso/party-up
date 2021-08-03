import axios from 'axios';
import { rejectUnauthenticated } from '../modules/authentication-middleware';
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

require('dotenv').config();
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${req.user.steam_id}&format=json&include_appinfo=true`)
  .then(result => {
      res.send(result.data);
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