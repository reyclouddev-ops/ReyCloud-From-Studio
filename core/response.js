class Response {

    static success(res, message, data = null) {

        return res.status(200).json({

            status: true,

            message,

            data

        });

    }

    static error(res, message) {

        return res.status(400).json({

            status: false,

            message

        });

    }

}

module.exports = Response;
