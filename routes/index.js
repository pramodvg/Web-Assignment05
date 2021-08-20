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


/* GET portfolio page. */
router.get('/portfolio', controllerData.portfolio);

// ***************************************************** //
// ************ Insert Data In To MongoDB ************** //
/* GET add service data. */
router.get('/add-service', controllerData.add_servicesdata);

/* GET add service data. */
router.get('/add-portfolio', controllerData.add_portfoliodata);

/* GET add about data. */
router.get('/add-about', controllerData.add_aboutdata);

module.exports = router;

