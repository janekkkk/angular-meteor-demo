var app = angular.module('demo',['angular-meteor']);

Meteor.startup(function () {
  angular.bootstrap(document, ['demo']);
});

app.controller("MainCtrl", ['$scope', '$collection', function($scope, $collection){

  $scope.newBlog = {};
  $collection(Posts).bind($scope, 'posts', true, true);


$scope.openModal = function(){
  $('#addModal').foundation('reveal', 'open');
}

  $scope.addBlogPost = function(){
    $('#addModal').foundation('reveal', 'close');
    var date = new Date();
    var newDate = "";
    var newDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    $scope.newBlog.createdAt = newDate;
    $scope.posts.push($scope.newBlog);
    $scope.newBlog = {};
  }


  $scope.removeBlogPost = function(post){
     $scope.posts.splice($scope.posts.indexOf(post), 1 );
  }

  $scope.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}]);




