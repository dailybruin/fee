var myApp=angular.module("myApp", []);

myApp.directive('ngNavBar', function() {
  return {
    restrict: 'A',
    templateUrl: 'nav-bar.html'
  }
});