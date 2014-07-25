angular.module('appControllerModule',[]).
	controller('AppControllerOne',['$scope', 'messageServiceOne',function($scope, messageServiceOne) {
		$scope.message = messageServiceOne.sayHello();
	}]).
	controller('AppControllerTwo',['$scope', 'messageServiceTwo',function($scope, messageServiceTwo) {
		$scope.message = messageServiceTwo.sayHello();
	}]);
