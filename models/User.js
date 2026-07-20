const connect = require("../core/database");
const { ObjectId } = require("mongodb");

class User {

    static collection = "users";

    static async create(data) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .insertOne(data);

    }

    static async getAll() {

        const db = await connect();

        return await db
            .collection(this.collection)
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

    }

    static async findById(id) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .findOne({

                _id: new ObjectId(id)

            });

    }

    static async findByUsername(username) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .findOne({

                username

            });

    }

    static async findByEmail(email) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .findOne({

                email

            });

    }

    static async updateRole(id, role) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .updateOne(

                {

                    _id: new ObjectId(id)

                },

                {

                    $set: {

                        role,

                        updatedAt: new Date()

                    }

                }

            );

    }

    static async updatePassword(id, password) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .updateOne(

                {

                    _id: new ObjectId(id)

                },

                {

                    $set: {

                        password,

                        updatedAt: new Date()

                    }

                }

            );

    }

    static async updateProfile(id, data) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .updateOne(

                {

                    _id: new ObjectId(id)

                },

                {

                    $set: {

                        ...data,

                        updatedAt: new Date()

                    }

                }

            );

    }

    static async delete(id) {

        const db = await connect();

        return await db
            .collection(this.collection)
            .deleteOne({

                _id: new ObjectId(id)

            });

    }

}

module.exports = User;
