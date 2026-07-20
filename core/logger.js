const connect = require("./database");

class Logger {

    static async save(user, action) {

        const db = await connect();

        await db.collection("logs").insertOne({

            user,

            action,

            createdAt: new Date()

        });

    }

}

module.exports = Logger;
