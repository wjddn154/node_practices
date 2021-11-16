const model = require('../models/emaillist');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll(function(){});
        console.log(results);
        res.render('index', {
            list: results || []
        });
    }

}