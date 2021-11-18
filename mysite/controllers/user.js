module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    join: function(req, res) {
        res.render('user/join');
    },
    _join: function(req, res) {
        console.log(req.body);
        res.redirect('/user/joinsuccess');
    }

}