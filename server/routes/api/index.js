const express = require('express');
const router = express.Router();
const players = require('../../DB/index');

router.get('/', (req, res) => {
  res.json({
    result: 'App is working fine'
  });
});

router.get('/player', (req, res) => {
  res.status(200).json(players.getPlayers());
});

router.post('/player', (req, res) => {
  const { playerName } = req.body;
  try {
    const id = players.addPlayer({ playerName });
    res.status(200).json({
      id
    });
  } catch (err) {
    res.status(200).send(`something went wrong: ${err.message}`);
  }
});

module.exports = router;
