const connect = require("../core/database");

class Log {

    static async create(data){

        const db = await connect();

        return await db
        .collection("logs")
        .insertOne(data);

    }

}

module.exports = Log;
