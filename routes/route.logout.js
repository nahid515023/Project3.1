const express = require('express');
const loginRoute = express.Router();
const logout = require("../controllers/controller.logout");


loginRoute.get('/logout',logout);

module.exports = loginRoute;