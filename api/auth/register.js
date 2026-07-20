const User = require("../../models/User");
const Bcrypt = require("../../core/bcrypt");
const Response = require("../../core/response");
const Validator = require("../../core/validator");
const { v4: uuid } = require("uuid");

module.exports = async (req, res) => {

    if (req.method !== "POST") {

        return Response.error(res, "Method Not Allowed");

    }

    try {

        const {

            username,

            email,

            password,

            confirmPassword

        } = req.body;

        if (

            Validator.empty(username) ||

            Validator.empty(email) ||

            Validator.empty(password) ||

            Validator.empty(confirmPassword)

        ) {

            return Response.error(

                res,

                "Semua field wajib diisi."

            );

        }

        if (password !== confirmPassword) {

            return Response.error(

                res,

                "Konfirmasi password tidak sama."

            );

        }

        if (password.length < 8) {

            return Response.error(

                res,

                "Password minimal 8 karakter."

            );

        }

        const checkUsername = await User.findByUsername(username);

        if (checkUsername) {

            return Response.error(

                res,

                "Username sudah digunakan."

            );

        }

        const checkEmail = await User.findByEmail(email);

        if (checkEmail) {

            return Response.error(

                res,

                "Email sudah digunakan."

            );

        }

        const hash = await Bcrypt.hash(password);

        const data = {

            userId: "USR-" + uuid().slice(0,8).toUpperCase(),

            username,

            email,

            password: hash,

            avatar: "default.png",

            role: "user",

            status: "active",

            createdAt: new Date(),

            updatedAt: new Date(),

            lastLogin: null

        };

        await User.create(data);

        return Response.success(

            res,

            "Register berhasil."

        );

    } catch (err) {

        console.error(err);

        return Response.error(

            res,

            "Internal Server Error."

        );

    }

};
