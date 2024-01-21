const { MongoClient, MongoDBCollectionNamespace } = require("mongodb");
const Db = process.env.DB_CONNECTION_STRING;
const client = new MongoClient(Db, {
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err) {
                console.error("Error connect to MongoDB", err);
                return callback(err);
            }
            // verify we have good db object
            if (db)
            {
                _db = db.db("employees");
                console.log("Successfully connected to MongoDB");
            }
            return callback(err);
        });
    },
    getDb: function () {
        return _db;
    },
};