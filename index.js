const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');


const app = express();
require('dotenv').config();

const PORT = process.env.port;


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());



const homeRoute = require("./routes/route.homePage");
const loginRoute = require('./routes/route.loginPage');
const logoutRoute = require('./routes/route.logout');
const signupRoute = require('./routes/route.signupPage');
const profileRoute = require('./routes/route.profile');
const jobPosterProfile = require('./routes/route.jobPosterProfile');
const authenticate = require('./middleware/authenticateToken');
app.use(homeRoute);
app.use(loginRoute);
app.use(logoutRoute);
app.use(signupRoute);
app.use(profileRoute);
app.use(authenticate);
app.use(jobPosterProfile);



// mysql database connection
const db = require('./models/dbConnection');
db.connect((err) => {
    if (err) throw err;
    else {
        console.log('Connected mysql');
    }
});

//Page url not found
app.use((req, res, next) => {
    res.send("Page Not Found 404");
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});