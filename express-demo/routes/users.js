/**
 * 实现登陆跳转
 */
var express = require('express');
var router = express.Router();

var dao =require('../database/dao');


/* GET users listing. */
router.post('/', function(req, res, next) {
  var user ={
    'username':req.body.username,
    'password':req.body.password
  }
  var sql = "select * from user where username='" + user.username + "' and password = " + user.password +"";
  /* var usercheck ={
    'username':'fang',
    'password':123
  } */
  dao.query(sql, function (error, results, fields){
    console.log(sql);
    console.log(results);
      if(results[0] >0){
        res.redirect('/index');
      }
  })
  
});

module.exports = router;
