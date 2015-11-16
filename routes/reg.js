var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    crypto = require('crypto'),
    TITLE_REG = 'register';

router.get('/', function(req, res) {
  res.render('reg',{title:TITLE_REG});
});

router.post('/', function(req, res) {
  var userName = req.body['username'],
      userPwd = req.body['password'],
      userRePwd = req.body['password'],      
      md5 = crypto.createHash('md5');
 
      userPwd = md5.update(userPwd).digest('hex');

  var newUser = new User({
      username: userName,
      userpass: userPwd
  });

  //check if user already exsits
  User.getUserNumByName(newUser.username, function (err, results) {        
             
      if (results != null && results[0]['num'] > 0) {
          err = 'user already exsits';
      }

      if (err) {
          res.locals.error = err;
          res.render('reg', { title: TITLE_REG });
          return;
      }

      newUser.save(function (err,result) {
          if (err) {
              res.locals.error = err;
              res.render('reg', { title: TITLE_REG }); 
              return;            
          }        

          if(result.insertId > 0)
          {
              res.locals.success = 'Successful! Please click <a class="btn btn-link" href="/login" role="button"> login </a>' ;
          }
          else
          {
              res.locals.error = err;
          }
         
          res.render('reg', { title: TITLE_REG });
          });    
    });          
});

module.exports = router;