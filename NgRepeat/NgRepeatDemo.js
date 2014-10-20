angular.module("app",[])
.controller("AppController", ["$scope", function($scope) {
	$scope.items = [];
	$scope.value = '';
	$scope.add = function() {
		if ($scope.items.indexOf($scope.value) === -1 && $scope.value !== '')
		{
			$scope.items.push($scope.value);
			$scope.value = '';
			$scope.error = '';
		}else
		{
			$scope.error = 'you have already added this value.';
		}
	};
}]);
