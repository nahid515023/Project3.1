const express = require('express');
const profileRoute = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
const profile = require("../controllers/controller.profile");


profileRoute.get('/profile',authenticateToken,profile);

module.exports = profileRoute;