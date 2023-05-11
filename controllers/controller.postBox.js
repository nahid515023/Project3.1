const db = require("../models/dbConnection");

const postBox = (req, res) => {
    const { category, text, location } = req.body;
    const id = req.user.id;
    const image = 'nahid.jpg';
    const time = new Date();
    const postTime = time;

    // console.log(time.toLocaleString());
    try {
        db.query('INSERT INTO jobPost SET ?', { jobPosterId: id, category: category, text: text, image: image, location: location, postTime:postTime }, (err, result) => {
            if (err) console.log(err);
        })
    }
    catch (err) {
        console.log(err);
    }
    // res.render('jobPosterProfile');
    res.redirect('/jobPosterProfile');
}
module.exports = postBox;