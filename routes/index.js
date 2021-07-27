var express = require('express');
var router = express.Router();
const controllerData = require('../controller/index')

/* GET home page. */
router.get('/', controllerData.index);

router.get('/about', controllerData.about);

module.exports = router;
