// Middleware to authenticate JWT token
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const secretKey = process.env.jwt_secret;

const authenticateToken = (req, res, next) => {
    const authHeader = req.cookies['userId'];
    // console.log(authHeader);
    const token = authHeader;
    if (token == null) return res.render('loginPage', { msg: "" });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        // console.log(user);
        next();
    });
};

module.exports = authenticateToken;