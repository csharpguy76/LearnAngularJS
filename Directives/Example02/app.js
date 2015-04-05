angular.module('app', [])
.controller('HelloWorldController', ['$scope',function($scope) {
    $scope.message = "This is a wonderful world we live in!"
}])
.directive('helloWorld', function () {
    return {
        restrict: 'E',
        templateUrl: 'template.html'
    };
});