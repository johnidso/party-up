const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `
    SELECT party.friend_id, users.username, users.steam_id, users.discord_id, steam_info.persona, steam_info.profile_url, steam_info.avatar FROM party
    JOIN users ON party.friend_id = users.id
    JOIN steam_info ON steam_info.steam_id = users.steam_id
    WHERE party.user_id = $1;
    `;
    pool.query(query,[req.user.id])
    .then(dbResponse => {
        res.send(dbResponse.rows);
    })
    .catch(err =>{
        console.log('Error getting user party records', err);
        res.sendStatus(500);
    })
});

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('In post,', req.body.id);
    const query = `
    INSERT INTO party (user_id, friend_id)
    VALUES ($1, $2);
    `;
    pool.query(query,[req.user.id, req.body.id])
    .then( result => {
        res.sendStatus(201);
    })
    .catch( err => {
        console.log('Error posting new friend', err);
        res.sendStatus(500);
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const query = `
    DELETE FROM party
    WHERE friend_id = $1;
    `;
    pool.query(query, [req.params.id])
    .then( result => {
        res.sendStatus(200);
    })
    .catch (err => {
        console.log('Error deleting friend', err);
        res.sendStatus(500);
    })
})

module.exports = router;
