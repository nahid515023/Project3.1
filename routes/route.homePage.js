const express = require('express');
const homeRoute = express.Router();
const controllerHomepage = require("../controllers/controller.homePage");


homeRoute.get('/',controllerHomepage.getHomepage);


module.exports = homeRoute;