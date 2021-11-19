const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    add: function(req, res) {
        const results = model.insert(req.body);
        res.redirect("/");
    },
    delete: function(req, res) {
        res.render('delete');
    },
    _delete: function(req, res, next) {
        try { 
            const results = model.destroy(req.body);
            res.redirect('/');
        } catch(e) {
            next(e);
        }   
    }

}