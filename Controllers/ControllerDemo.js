// Javascript
var app = angular.module('app', []);
app.controller('HelloWorldController', ['$scope', function($scope) {
	$scope.message = "Hello, World!";
}]);
