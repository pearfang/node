var express = require('express');
var router = express.Router();
var eventproxy = require('eventproxy');
var request = require('superagent');
var cheerio = require('cheerio');

/* GET home page. */
var url ="http://www.mmonly.cc/mmtp/xgmn/list_10_1.html";
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
   request.get(url
    ).end((err, sres) => {
        if (err) {
           return next(err);
        }

        var $ = cheerio.load(sres.text);
        var topicUrl = [];
        $("#load-img .item_t .img").each(function (index, elem) {

            var element = $(elem);
            var imghref = element.find(".ABox img").attr("src");
            topicUrl.push({
                imghref:imghref
            });
        });
      console.log(topicUrl);
        res.render('index',{
          topicUrl:topicUrl,
          title:'美女图片'
        });
    });
});

module.exports = router;
