const connect = require("../core/database");

class Session{

    static async create(data){

        const db = await connect();

        return await db
        .collection("sessions")
        .insertOne(data);

    }

}

module.exports = Session;
