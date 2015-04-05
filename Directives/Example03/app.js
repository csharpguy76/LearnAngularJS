angular.module('app', [])
.directive('helloWorld', function () {
    return {
        restrict: 'E',
        scope : {
            message: '@'  
        },
        templateUrl: 'template.html'
    };
});