const db = require("../models/dbConnection");

const deletePost = (req, res) => {
    var id = req.params.id;
    id = parseInt(id);
    console.log(id);
    db.query(`DELETE FROM jobPost WHERE postId = ?`, [id], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.redirect('/jobPosterProfile');
        }
    });
}

module.exports = deletePost;