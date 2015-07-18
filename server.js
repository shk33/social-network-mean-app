var express = require('express'),
    bodyParser = require('body-parser');

var Post = require('./models/post');

var app = express();

app.use(bodyParser.json());
app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));

app.listen(3000, function () {
  console.log('Server running at on port', 3000);
});