const jwt = require("jsonwebtoken");

class JWT {

    static create(payload) {

        return jwt.sign(

            payload,

            process.env.JWT_SECRET,

            {

                expiresIn: process.env.JWT_EXPIRES

            }

        );

    }

    static verify(token) {

        try {

            return jwt.verify(

                token,

                process.env.JWT_SECRET

            );

        } catch {

            return false;

        }

    }

}

module.exports = JWT;
