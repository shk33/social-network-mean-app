var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function (req, res) {
  res.json([{
    username: 'dickeyxxx',
    body: 'node rocks!'
  }]);
});

app.post('/api/posts', function (req, res) {
  console.log('POST petition recieved');
  console.log(req.body.username);
  console.log(req.body.body);
  res.send(201);
});

app.listen(3000, function () {
  console.log('Server running at on port', 3000);
});