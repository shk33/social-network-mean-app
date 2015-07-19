var express = require('express');
var router = express.Router();

router.use(express.static(__dirname+'/../assets'));

router.get('/', function (req, res, next) {
  res.sendfile('layouts/app.html');
});

module.exports = router;