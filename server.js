var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    webSockets = require('./websockets');

var Post = require('./models/post');

var app = express();

app.use(bodyParser.json());
app.use(logger('dev'));

app.use(require('./auth'));
app.use(require('./controllers/static'));
app.use('/api/posts',require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Server', process.pid ,'running at on port', port);
});
webSockets.connect(server);