const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `
    SELECT party.user_id, party.friend_id, users.username, steam_info.avatar FROM party
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

router.post('/', (req, res) => {
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

module.exports = router;
