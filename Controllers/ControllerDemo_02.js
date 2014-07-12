// Javascript
var app = angular.module('app', []);
app.controller('HelloWorldController', ['$scope', function($scope) {
	$scope.showMessage = function(value) {
		$scope.message = "Hello, " + value;
	};
}]);
