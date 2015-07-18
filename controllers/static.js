var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.sendfile('layouts/posts.html');
});

module.exports = router;