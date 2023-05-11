const jwt = require('jsonwebtoken');

const chackLogin = (req, res, next) => {
    const authorization = req.cookie;
    console.log(authorization);

    try {
        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.jwt_secret);
        const { username, userId } = decode;
        req.name = username;
        req.id = userId;
        next();
    }
    catch (err) {
        console.log(err);
    }
};
module.exports = chackLogin;