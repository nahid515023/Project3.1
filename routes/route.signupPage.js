const express = require('express');
const multer = require('multer');

const signupRoute = express.Router();
const getSignup = require("../controllers/controller.signupPage");

// File upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
    }
})
const upload = multer({ storage: storage })

signupRoute.get('/signup', getSignup.getSignup);
signupRoute.post('/signup/jobTaker', upload.single('tlp'), getSignup.getPostData);
signupRoute.post('/signup/jobPoster',getSignup.getPostData2);



module.exports = signupRoute;