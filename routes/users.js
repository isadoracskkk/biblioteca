var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'you are so cool!' });
});

router.get('/ifc', function(req, res, next) {
  res.render('index', { title: 'Bem vindo ao ifc!' });
});

router.get('/cool/beach', function(req, res, next) {
  res.render('index', { title: 'Adoro praia!' });
});

module.exports = router;
