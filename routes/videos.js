var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('videos',{
    isVideos:true
  }); //view/videos.hbs
});

module.exports = router;