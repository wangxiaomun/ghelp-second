var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GHelp' });
});

router.get('/reg', function(req, res) {
 res.render('reg', { title: 'GHelp' });
});

router.post('/reg', function(req, res) {
 res.render('reg', { title: 'GHelp' });
});

router.get('/housing', function(req, res) {
 res.render('housing', { title: 'GHelp' });
});

router.get('/user', function(req, res) {
 res.render('user', { title: 'GHelp' });
});

module.exports = router;
