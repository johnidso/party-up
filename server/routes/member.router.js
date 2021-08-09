const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/playlist/:id', rejectUnauthenticated, (req, res) => {
    const query = `
    SELECT * FROM "playlist"
    WHERE steam_id=$1;
    `;
    pool.query(query, [req.params.id])
    .then(dbResponse => {
        res.send(dbResponse.rows);
    })
    .catch (err => {
        console.log('Error getting user playlist', err);
        res.sendStatus(500);
    })
});

router.get('/', rejectUnauthenticated, (req,res) => {
    const query = `
    SELECT id, username, email, steam_id, discord_id FROM users;
    `;
    pool.query(query)
    .then( dbResponse => {
        res.send(dbResponse.rows);
    })
    .catch(err => {
        console.log('Error getting member list', err);
        res.sendStatus(500);
    })
})

module.exports = router;