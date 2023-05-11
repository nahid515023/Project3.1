const express = require('express');
const loginRoute = express.Router();
const getLogin = require("../controllers/controller.loginPage");


loginRoute.get('/login',getLogin.getLogin);
loginRoute.post('/login',getLogin.postLogin);

module.exports = loginRoute;