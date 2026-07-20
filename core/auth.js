const JWT = require("./jwt");

module.exports = (req) => {

    const auth = req.headers.authorization;

    if (!auth) return false;

    const token = auth.replace("Bearer ", "");

    return JWT.verify(token);

};
