angular.module('app', [])
.directive('helloWorld', function () {
    return {
        restrict: 'E',
        templateUrl: 'template.html'
    };
});