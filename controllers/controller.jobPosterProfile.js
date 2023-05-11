const db = require("../models/dbConnection");

const jobPosterProfile = (req, res) => {

    const id = req.user.id;

    db.query('SELECT * FROM jobPost WHERE jobPosterId = ?', [id], (err, result) => {
        if (err) console.log(err);
        // console.log(result);
        return res.render('jobPosterProfile', { data: result });
    });
}
module.exports = jobPosterProfile;