var app = angular.module('app.demo', []);

// Controllers
app.controller('AppController', ['$scope', function($scope) {
		$scope.message = '';
		$scope.onClick = function() {
			$scope.message = 'Hello, World!';
		}
	}
]);
