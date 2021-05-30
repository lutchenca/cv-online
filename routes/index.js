var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/experience', function(req, res, next) {
  res.render('experience');
});

router.get('/education', function(req, res, next) {
  res.render('education');
});

router.get('/skills', function(req, res, next) {
  res.render('skills');
});

router.get('/interests', function(req, res, next) {
  res.render('interests');
});

module.exports = router;
