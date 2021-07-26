var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { Title: 'Express', 
  ParaText: 'This is First Paragraph' });
});

router.get('/about', (req,res,next) =>{
  res.render('about',{title:'About this page', paragraph:'This is about my Project'})
});

module.exports = router;
