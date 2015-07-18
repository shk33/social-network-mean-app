var express = require('express'),
    bodyParser = require('body-parser');

var Post = require('./models/post');

var app = express();

app.use(bodyParser.json());
app.use(require('./controllers/api/posts'));

app.get('/', function (req, res, next) {
  res.sendfile('layouts/posts.html');
});

app.listen(3000, function () {
  console.log('Server running at on port', 3000);
});