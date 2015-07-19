var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jwt');
var config = require('../../config');

router.post('/', function (req, res, next) {
  User.findOne({username: req.body.username})
  .select('password username')
  .exec(function (err, user) {
    if(err) return next(err);
    if(!user) return res.send(401);
    bcrypt.compare(req.body.password, user.password, function (err, valid) {
      if (err) return next(err);
      if(!valid) return res.send(401);
      var token = jwt.encode({username: user.username}, cofig.secret);
      res.json(token);
    });
  });
});

module.exports = router;