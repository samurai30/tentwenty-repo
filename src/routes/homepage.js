const express = require('express');
const router = express.Router();
const homepageController = require('../controllers/homepageController');

/* GET home page. */
router.get('/', homepageController.index);

module.exports = router;
