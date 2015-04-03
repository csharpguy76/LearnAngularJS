angular.module('app', [])
.directive('helloWorld', function () {
    return {
        restrict: 'E',
        template: '<b>Hello, World!</b>'
    };
});