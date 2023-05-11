const path = require('path');

exports.getHomepage = (req, res) => {
    // res.sendFile(path.resolve('views/homepage.html'));
    res.render('homepage',{

    });
}
