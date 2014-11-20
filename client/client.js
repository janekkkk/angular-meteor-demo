var app = angular.module('demo',['angular-meteor']);

Meteor.startup(function () {
  angular.bootstrap(document, ['demo']);
});

app.filter('unique', function() {
  return function (arr, field) {
    return _.uniq(arr, function(a) { return a[field]; });
  };
});

var inArray = function(item, array){
  if(array.indexOf(item) !== -1){
    return true;
  }
  else return false;
};

app.controller("MainCtrl", ['$scope', '$collection', function($scope, $collection){

  $scope.newBlog = {};
  $collection(Posts).bind($scope, 'posts', true, true);
  $collection(Authors).bind($scope, 'authors', true, true);
  $collection(Categories).bind($scope, 'categories', true, true);

  $scope.openModal = function(){
    $('#addModal').foundation('reveal', 'open');
  }

  $scope.addBlogPost = function(){
    $('#addModal').foundation('reveal', 'close');
    var date = new Date();
    var newDate = "";
    var newDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

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




