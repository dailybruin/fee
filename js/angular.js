var myApp=angular.module("myApp", []);

myApp.controller("myController", function(){});

myApp.directive('ngNavBar', function() {
  return {
    restrict: 'A',
    templateUrl: 'nav-bar.html'
  }
});