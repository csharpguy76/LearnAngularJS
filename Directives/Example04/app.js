angular.module('app', [])
.controller('PersonViewController', ['$scope', function($scope){
    $scope.person = {firstName: 'Joe', lastName: 'Bloggs', age: 40 }
}])
.directive('personDetailView', function () {
    return {
        restrict: 'E',
        scope : {
            personDetail: '=person'  
        },
        templateUrl: 'template.html'
    };
});