var express = require('express');
var router = express.Router();
const controllerData = require('../controller/index')

/* GET home page. */
router.get('/', controllerData.index);

/* GET about page. */
router.get('/about', controllerData.about);

/* GET contact page. */
router.get('/contact', controllerData.contactme);


/* GET service page. */
router.get('/service', controllerData.services);

module.exports = router;

