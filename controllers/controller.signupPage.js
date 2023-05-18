
const bcrypt = require('bcrypt');
const db = require('../models/dbConnection');




exports.getSignup = (req, res) => {
    res.render('signup',{msg:""});
}


exports.getPostData = (req, res) => {
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var phone = req.body.phone;
    var email = req.body.email;
    var nid = req.body.nid;
    var dob = req.body.dob;
    var address = req.body.address;
    var tln = req.body.tln;
    var tlpic = req.file.filename;
    var password = req.body.password;
    var confirm = req.body.confirm;
    var gender = req.body.gender;
    var jobTaker = 0;

    db.query('SELECT email FROM jobTaker WHERE email = ?', [email], async(err, result) => {
        if (err) {
            console.log(err);
        }

        console.log(result);

        if (result.length > 0) {
            return res.render('signup', {
                msg: "Email already use"
            });
        }
        else if (password !== confirm) {
            return res.render('signup', {
                msg: "Passwords do not match"
            });
        }
        else {
            var p = await bcrypt.hash(password,8);
            db.query('INSERT INTO jobTaker SET ?', { firstname: fname, lastname: lname, phone: phone, email: email, nid: nid, dob: dob, address: address, tln: tln, tlpic: tlpic, password: p, gender: gender,who: jobTaker }, (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
            return res.redirect('/login');

        }
    });


}


// JobPoster data save in database
exports.getPostData2 = (req, res) => {
    // console.log(req.body);
    // const { fname, lname, phone, email, nid, dob, address, password, confirm, gender } = req.body;
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var phone = req.body.phone;
    var email = req.body.email;
    var nid = req.body.nid;
    var dob = req.body.dob;
    var address = req.body.address;
    var password = req.body.password;
    var confirm = req.body.confirm;
    var gender = req.body.gender;
    var jobPoster = 1;



    db.query('SELECT email FROM jobPoster WHERE email = ?', [email], async(err, result) => {
        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            return res.render('signup', {
                msg: "Email already use"
            });
        }
        else if (password !== confirm) {
            return res.render('signup', {
                msg: "Passwords don't match"
            });
        }
        else {
            var p = await bcrypt.hash(password,8);
            db.query('INSERT INTO jobPoster SET ?', { firstname: fname, lastname: lname, phone: phone, nid: nid, dob: dob, address: address, password: p, gender: gender, email: email,who : jobPoster }, (err, result) => {
                if (err) {
                    console.log(err);
                }
            });
            return res.redirect('/jobPosterProfile');
        }
    });
}
