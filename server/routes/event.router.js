const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const query = `
    INSERT INTO events (host_id, attendee_id, event_time, playlist_id)
    VALUES ($1, $2, $3);
    `;
});

module.exports = router;