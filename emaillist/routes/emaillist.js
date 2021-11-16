const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').get(controller.index);
// router.router('/add').get(controller.form);
// router.router('/add').post(controller.add);

module.exports = router;


