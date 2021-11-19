const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    add: function(req, res) {
        console.log(req.body);
        const results = model.insert(req.body);
        res.redirect("/");
    }


}