
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const db = require('../models/dbConnection');



exports.getLogin = (req, res) => {
    res.render('loginPage', {
        msg: "",
    });
}

exports.postLogin = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    console.log(email, password)

    db.query('SELECT * FROM jobPoster WHERE jobPoster.email = ?', [email], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).render('errorPage', {
                msg: 'An error occurred while querying the database',
            });
        }

        // console.log(results);

        if (results.length == 0) {
            return res.status(401).render('loginPage', {
                msg: 'Invalid email or password!',
            });
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).render('errorPage', {
                    msg: 'An error occurred while comparing the passwords',
                });
            }

            if (result) {
                // Create a JWT with user's ID as payload
                const token = jwt.sign({ id: user.id }, process.env.jwt_secret);

                // Set the JWT as a cookie
                res.cookie('userId', token, { httpOnly: true });

                return res.status(201).redirect('/jobPosterProfile');
            } else {
                return res.status(401).render('loginPage', {
                    msg: 'Invalid email or password!',
                });
            }
        });
    });
};
