const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `
    SELECT * FROM "playlist"
    WHERE steam_id=${req.user.steam_id};
    `;
    pool.query(query)
    .then(dbResponse => {
        res.send(dbResponse.rows);
    })
    .catch (err => {
        console.log('Error getting user playlist', err);
        res.sendStatus(500);
    })
});


router.post('/', rejectUnauthenticated, (req, res) => {
  const query = `
  INSERT INTO playlist (steam_id, game_id, image)
  VALUES ($1, $2, $3);
  `;
  pool.query(query, [req.user.steam_id, req.body.gameId, req.body.img])
  .then(result => {
      res.sendStatus(201);
  })
  .catch(err => {
      console.log('Error adding playlist item', err);
      res.sendStatus(500);
  })
});

module.exports = router;
