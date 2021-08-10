const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Get events for current user
router.get('/', (req, res) => {
    const query = `
    SELECT events.id, events.host_id, events.attendee_id, events.event_time, events.game_id, playlist.image FROM events
    JOIN playlist ON events.game_id = playlist.game_id
    WHERE host_id = $1
    GROUP BY events.id, playlist.image;
    `;
    pool.query(query, [req.user.id])
    .then(dbResponse => {
        res.send(dbResponse.rows);
    })
    .catch(err => {
        console.log('Error getting events from db', err);
        res.sendStatus(500);
    })
});

// Add a new event with another user
router.post('/', (req, res) => {
    const query = `
    INSERT INTO events (host_id, attendee_id, event_time, game_id)
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(query, [req.user.id, req.body.attendeeId, req.body.eventDateTime, req.body.playlistId])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('Error posting new event', err);
    })
});

router.delete('/:id', (req, res) => {
    const query = `
    DELETE FROM events
    WHERE id = $1;
    `;
    pool.query(query, [req.params.id])
    .then( result => {
        res.sendStatus(200);
    })
    .catch (err => {
        console.log('Error deleting event', err);
        res.sendStatus(500);
    })
})

module.exports = router;