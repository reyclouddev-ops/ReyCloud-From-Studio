const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

let client;
let db;

async function connect() {

    if (db) return db;

    client = new MongoClient(uri);

    await client.connect();

    db = client.db("ReyCloudFormStudio");

    console.log("✅ MongoDB Connected");

    return db;

}

module.exports = connect;
