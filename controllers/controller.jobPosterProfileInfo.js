const db = require("../models/dbConnection");
const fs = require('fs');
const path = require('path');

const jobPosterProfileInfo = (req, res) => {
    const id = req.user.id;
    const name = req.body.name;
    const bio = req.body.bio;
    const description = req.body.description;
    const address = req.body.address;
    const email = req.body.email;
    const fb = req.body.facebook;
    const linkedin = req.body.linkedin;
    const twitter = req.body.twitter;
    var image;
    if (!req.file) {
        image = req.body.image;
    }
    else {
        // Function to delete an uploaded image
        function deleteImage(imagePath) {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Error deleting image:', err);
                } else {
                    console.log('Image deleted successfully');
                }
            });
        }
        // Example usage
        const imagePath = path.join(__dirname, '../uploads', req.body.image);
        deleteImage(imagePath);
        image = req.file.filename;
    }
    db.query(`UPDATE jobPosterProfile SET ? where posterId =${id}`, { name: name, image: image, bio: bio, description: description, address: address, email: email, facebook: fb, linkedin: linkedin, twitter: twitter }, (err, result) => {
        if (err) {
            console.log(err);
        }
        return res.redirect('/jobPosterProfile');
    });
    // res.send('welcome');
}
module.exports = jobPosterProfileInfo;