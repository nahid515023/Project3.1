
const logout = (req, res) => {
    try {
        res.clearCookie('userId');
        res.render('loginPage', { msg: "" });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = logout;