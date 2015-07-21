angular.module('app')
.run(function ($rootScope) {
  var url = "ws://localhost:3000";
  var connection = new WebSocket(url);

  connection.onopen = function () {
    console.log('WebSocket connected');
  };

  connection.onmessage = function (event) {
    console.log(event);
    var payload = JSON.parse(event.data);
    $rootScope.$broadcast('ws:'+payload.topic, payload.data);
  };
});