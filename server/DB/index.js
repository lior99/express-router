const mongoClient = require('mongodb').MongoClient;

const dbHandler = {
    mongoUrl: "mongodb://127.0.0.1/players",

    find: async query => {
        return new Promise(async (resolve, reject) => {
            try {
                const instance = await dbHandler.connect();
                const db = instance.db("players");
                db.collection("players").find(query).toArray((err, result) => {
                    if (err) reject(err);

                    instance.close();
                    resolve(result);
                })
            } catch (err) {
                reject(err);
            }
        })
    },

    insert: async ({ playerName }) => {
        try {
            console.log('playerName', playerName);
            const instance = await dbHandler.connect();
            const id = instance.db("players").collection("players").insertOne({ "name": playerName });
            instance.close();
            return id;
        } catch (err) {
            throw err;
        }
    },

    connect: () => {
        return new Promise((resolve, reject) => {
            mongoClient.connect(dbHandler.mongoUrl, (err, dbInstance) => {
                if (err) {
                    console.log('got error while connecting to db', err)
                    reject(err);
                }

                console.log('successfully connected to db');
                resolve(dbInstance);
            });

        });

    }
}

module.exports = dbHandler;