angular.module('appControllerModule',[]).
	controller('AppControllerOne',['$scope', 'messageServiceOne',function($scope, messageServiceOne) {
		$scope.message = '';
		$scope.showMessage = function() {
			$scope.message = messageServiceOne.sayHello();
		};
	}]).
	controller('AppControllerTwo',['$scope', 'messageServiceTwo',function($scope, messageServiceTwo) {
		$scope.message = '';
		$scope.showMessage = function() {
			$scope.message = messageServiceTwo.sayHello();
		};
	}]);
