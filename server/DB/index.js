const PlayerModel = require('./model/player');

const dbHandler = {
  db: null,
  init: () => {
    if (!this.db) {
      const mongoUrl =
        process.env.MONGO_CONNECTION_STRING ||
        'mongodb://localhost:27017/players';
      const mongoose = require('mongoose');
      mongoose.connect(mongoUrl, { useNewUrlParser: true });
      this.db = mongoose.connection;
      this.db.on('error', error => console.log('error', error));
      this.db.once('open', () => console.log('successfully conneced to db'));
    }
  },

  find: async () => {
    try {
      const result = await PlayerModel.find({});
      return result;
    } catch (err) {
      console.log('err ->', err);
      return err;
    }
  },

  insert: async ({ playerName }) => {
    try {
      const newPlayer = new PlayerModel({ playerName });
      const result = await newPlayer.save();
      return result;
    } catch (err) {
      return err;
    }
  }
};

dbHandler.init();
module.exports = dbHandler;
