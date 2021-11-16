const express = require('express');

const router = express.Router();

//user?no=10
router.route("").get(function(req, res){
    res.render('user/info', {
        no: req.query.no || 0       // 값이 없으면 0 입력
    });
});
            //@Pathvariable("/info/{no}") 같은 의미인듯?
router.route("/info/:no").get(function(req, res){
    res.render('user/info', {
        no: req.params.no || 0
    });
});

router.route("/join").get(function(req, res){
    res.render('user/join');
});

router.route("/join").post(function(req, res){
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;

