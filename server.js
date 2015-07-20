var express = require('express'),
    bodyParser = require('body-parser');

var Post = require('./models/post');

var app = express();

app.use(bodyParser.json());

app.use(require('./auth'));

app.use(require('./controllers/static'));
app.use('/api/posts',require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));

app.listen(3000, function () {
  console.log('Server running at on port', 3000);
});