const express = require('express');
const router = express.Router();
const dbClient = require('../../DB/index');

router.get('/', (req, res) => {
  res.json({
    result: 'App is working fine'
  });
});

router.get('/player', async (req, res) => {
  try {
    const result = await dbClient.find({});
    res.status(200).send(result);
  } catch (err) {
    console.log('got error', err);
    res.status(200).send(`Error: ${err.message}`);
  }
});

router.post('/player', (req, res) => {
  const { playerName } = req.body;
  try {
    const result = dbClient.insert({ playerName });
    res.status(200).json({
      result
    });
  } catch (err) {
    res.status(200).send(`something went wrong: ${err.message}`);
  }
});

router.put('/player/avatar', (req, res) => {
  const { playerName, avatar } = req.body;

  console.log({ playerName, avatar });

  try {
    const result = dbClient.updateAvatar({ name: playerName, dataUrl: avatar });
    res.status(200).json({
      result
    });
  } catch (err) {
    res.status(200).send(`error in update avatar: ${err.message}`);
  }
});

module.exports = router;
