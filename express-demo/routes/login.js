var express = require('express');
var router = express.Router();


router.get('/',function(req ,res ,next){
    res.render('login',{
        title:'后台登陆'
    });
})

module.exports = router;