const mongoClient = require('mongodb').MongoClient;

const dbHandler = {
  mongoUrl: process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017',
  dbName: 'players',
  collectionName: 'players',

  find: async query => {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await dbHandler.connect();
        const client = db.db('players');
        client
          .collection('players')
          .find(query)
          .toArray((err, result) => {
            if (err) reject(err);

            db.close();
            resolve(result);
          });
      } catch (err) {
        console.log('err ->', err);
        reject(err);
      }
    });
  },

  insert: async ({ playerName }) => {
    try {
      const db = await dbHandler.connect();
      const id = db
        .db('players')
        .collection('players')
        .insertOne({ name: playerName });
      db.close();
      return id;
    } catch (err) {
      throw err;
    }
  },

  updateAvatar: async ({ name, dataUrl }) => {
    try {
      const db = await dbHandler.connect();
      const result = db
        .db('players')
        .collection('players')
        .updateOne(
          { name },
          {
            $set: {
              avatar: dataUrl
            }
          }
        );

      db.close();
      return result;
    } catch (err) {
      throw err;
    }
  },

  connect: () => {
    return new Promise(async (resolve, reject) => {
      const client = await mongoClient.connect(
        `${dbHandler.mongoUrl}`,
        { useNewUrlParser: true },
        (err, db) => {
          if (err) {
            console.log('got error while connecting to db', err);
            reject(err);
            return;
          }

          console.log('successfully connected to db');
          resolve(db);
        }
      );
    });
  },

  status: async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await dbHandler.connect();
        resolve('successfully connected to mongo db :)');
        db.close();
      } catch (err) {
        reject(`unable to connect to mongo db -> ${err.message}`);
      }
    });
  }
};

module.exports = dbHandler;
