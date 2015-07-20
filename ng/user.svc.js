angular.module('app')
.service('UserSvc', function ($http) {
  var svc = this;

  svc.getUser = function () {
    return $http.get('/api/users')
    .then(function (response) {
      return response.data;
    });
  };

  svc.login = function (username, password) {
    return $http.post('/api/sessions', {
      username: username,
      password: password
    }).then(function (response) {
      svc.token = response.data;
      window.localStorage.token = response.data;
      $http.defaults.headers.common['X-Auth'] = response.data;
      return svc.getUser();
    });
  };

  svc.createUser = function (username, password) {
    return $http.post('/api/users',{
      username: username,
      password: password
    }).then(function (response) {
      return svc.login(username, password);
    });
  };

  svc.removeJwtHeader = function () {
    delete $http.defaults.headers.common['X-Auth'];
  };

  svc.enableJwtHeader = function (token) {
    $http.defaults.headers.common['X-Auth'] = token;
  };
});