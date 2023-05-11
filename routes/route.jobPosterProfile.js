const express = require('express');
const profileRoute = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
const jobPosterProfile = require("../controllers/controller.jobPosterProfile");
const postBox = require("../controllers/controller.postBox");



profileRoute.get('/jobPosterProfile',authenticateToken,jobPosterProfile);
// profileRoute.post('/jobPosterProfile',authenticateToken,jobPosterProfile);

profileRoute.post('/jobPosterProfile/postBox',authenticateToken,postBox);

module.exports = profileRoute;