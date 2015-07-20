angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc) {
  $scope.$on('login', function (_,user) {
    console.log(user);
    $scope.currentUser = user;
  });

  $scope.logout = function () {
    $scope.currentUser = undefined;
    UserSvc.removeJwtHeader();
  };
});