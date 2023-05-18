const db = require("../models/dbConnection");

const jobPosterProfile = (req, res) => {

    const id = req.user.id;
    db.query('SELECT * FROM jobPost WHERE jobPosterId = ?', [id], (err, result) => {
        if (err) console.log(err);
        db.query('SELECT * FROM jobPosterProfile WHERE posterId = ?', [id], (err, profileInfo) => {
            if (err) if (err) console.log(err);
            db.query('SELECT * FROM Catagory', (err, category) => {
                console.log(category);
                res.render('jobPosterProfile', { data: result, profileInfo: profileInfo , category : category });
            });
        });
    });
}
module.exports = jobPosterProfile;