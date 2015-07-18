var express = require('express'),
    bodyParser = require('body-parser');

var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function (req, res) {
  res.json([{
    username: 'dickeyxxx',
    body: 'node rocks!'
  }]);
});

app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  });
  post.save(function (err, post) {
    if (err) return next(err);
    res.json(201,post);
  });
});

app.listen(3000, function () {
  console.log('Server running at on port', 3000);
});