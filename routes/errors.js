var express = require('express');
var router = express.Router();
const controllerData = require('../controller/errors')


router.use(controllerData.erroute)

module.exports = router