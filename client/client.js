
var app = angular.module('demo',['angular-meteor']);

Meteor.startup(function () {
  angular.bootstrap(document, ['demo']);
});

app.controller("MainCtrl", ['$scope', '$collection', function($scope, $collection){


  $collection(Posts).bind($scope, 'posts', true, true);


  $scope.newBlog = {};

  $scope.addBlogPost = function(){
    $('#addModal').foundation('reveal', 'close');
    $scope.newBlog.createdAt = new Date();
    $scope.posts.push($scope.newBlog);
    $scope.newBlog = {};
  }

  $scope.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}]);




