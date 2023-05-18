const express = require('express');
const profileRoute = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
const jobPosterProfile = require("../controllers/controller.jobPosterProfile");
const jobPosterProfileInfo = require("../controllers/controller.jobPosterProfileInfo");
const postBox = require("../controllers/controller.postBox");
const deletePost = require("../controllers/controller.deletePost");

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
    }
})

const upload = multer({ storage: storage })





profileRoute.get('/jobPosterProfile', authenticateToken, jobPosterProfile);
// profileRoute.post('/jobPosterProfile',authenticateToken,jobPosterProfile);

profileRoute.post('/jobPosterProfile/postBox', authenticateToken, postBox);
profileRoute.get('/jobPosterProfile/delete/:id', authenticateToken, deletePost);
profileRoute.post('/jobPosterProfile/jobPosterProfileInfo', authenticateToken, upload.single('picture'), jobPosterProfileInfo);

module.exports = profileRoute;