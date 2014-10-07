angular.module('app',[])
.service('Person', function() {
	this.name = '';
	this.age = '';
})
.factory('FactoryService', function() {
	return {
			name: '', 
			age: ''
	};
})
.controller('appController1', ['$scope', 'Person', function($scope, Person) {
	$scope.Person1 =  Person;
}])
.controller('appController2', ['$scope', 'Person', function($scope, Person) {
	$scope.Person2 = Person;
}]);
