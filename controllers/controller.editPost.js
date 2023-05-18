const db = require("../models/dbConnection");

const deletePost = (req, res) => {
    var id = req.params.id;
    id = parseInt(id);
    console.log(id);
    db.query('UPDATE customers SET name = ? WHERE id = ?', ['John Doe', 1], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.redirect('/jobPosterProfile');
        }
    });
}

module.exports = deletePost;