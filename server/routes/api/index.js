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
    console.log('result in router', result);
    res.status(200).send(result);
  } catch (err) {
    console.log('got error', err)
    res.status(200).send(`Error: ${err.message}`)
  }

});

router.post('/player', (req, res) => {
  const { playerName } = req.body;
  try {
    const id = dbClient.insert({ playerName });
    res.status(200).json({
      id
    });
  } catch (err) {
    res.status(200).send(`something went wrong: ${err.message}`);
  }
});

module.exports = router;
