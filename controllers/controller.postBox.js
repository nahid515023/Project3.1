const db = require("../models/dbConnection");

const postBox = (req, res) => {
    const id = req.user.id;
    const category = req.body.category;
    const text = req.body.text;
    const location = req.body.location;
    const image = "";
    const time = new Date();
    const postTime = time;

    

    console.log(req.body);
    try {
        db.query('INSERT INTO jobPost SET ?', { jobPosterId: id, category: category, text: text, image: image, location: location, postTime: postTime }, (err, result) => {
            if (err) console.log(err);
        })
    }
    catch (err) {
        console.log(err);
    }
    res.redirect('/jobPosterProfile');
}

module.exports = postBox;