// Javascript
var app = angular.module('app', []);
app.controller('HelloWorldController', ['$scope', function($scope) {
	$scope.showMessage = function() {
		$scope.message = "Hello, World";
	};
}]);
