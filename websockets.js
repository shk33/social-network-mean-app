var ws = require('ws');
var _ = require('lodash');
var clients = [];

exports.connect = function (server) {
  var wss = new ws.Server({server:server});
  wss.on('connection', function (ws) {
    clients.push(ws);
    wss.on('close', function () {
      _.remove(clientes, ws);
    });
  });
};

exports.broadcast = function (topic, data) {
  var json = JSON.stringify({topic: topic, data: data});
  clients.forEach(function (client) {
    client.send(json);
  });
};