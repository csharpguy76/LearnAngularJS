var myApp = angular.module("app.demo", []);

myApp.factory("Data", function(){
	return {
		message: "Hello, World"
	};
});

myApp.controller("AppController1", ["$scope", "Data", function($scope, Data) {
	$scope.data = Data;
}]);

myApp.controller("AppController2", ["$scope", "Data", function($scope, Data) {
	$scope.data = Data;
}]);
