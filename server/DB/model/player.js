const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'N/A'
  }
});

const PlayerModel = mongoose.model('PlayerModel', playerSchema);
PlayerModel.createCollection();

module.exports = PlayerModel;
