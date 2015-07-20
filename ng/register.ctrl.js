angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.createUser = function (username, password) {
    UserSvc.createUser(username, password)
    .then(function (user) {
      $scope.$emit('login',user);
    });
  };
});