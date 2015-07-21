angular.module('app').
controller('PostsCtrl', function ($scope, PostsSvc) {
  PostsSvc.fetch().success(function (posts) {
    $scope.posts = posts;
  });

  $scope.addPost = function () {
    if ($scope.postBody) {
      PostsSvc.create({
        username: 'mcoronel',
        body: $scope.postBody
      }).success(function (post) {
        $scope.postBody = null;
      });
    }
  };

  $scope.$on('ws:new_post', function (_, post) {
    $scope.$apply(function () {
      $scope.posts.unshift(post);
    });
  });

});