angular.module('app', ['kendo.directives'])
.controller('AppController', ['$scope', function($scope) {
	$scope.countries = [ 
	  {name: 'Afghanistan', code: 'AF'}, 
	  {name: 'Åland Islands', code: 'AX'}, 
	  {name: 'Albania', code: 'AL'}, 
	  {name: 'Algeria', code: 'DZ'}, 
	  {name: 'American Samoa', code: 'AS'}, 
	  {name: 'AndorrA', code: 'AD'}, 
	  {name: 'Angola', code: 'AO'}, 
	  {name: 'Anguilla', code: 'AI'}, 
	  {name: 'Antarctica', code: 'AQ'}, 
	  {name: 'Antigua and Barbuda', code: 'AG'}, 
	  {name: 'Argentina', code: 'AR'}, 
	  {name: 'Armenia', code: 'AM'}, 
	  {name: 'Aruba', code: 'AW'}, 
	  {name: 'Australia', code: 'AU'}, 
	  {name: 'Austria', code: 'AT'}, 
	  {name: 'Azerbaijan', code: 'AZ'}
	];
	
	$scope.country = '';
	
	$scope.options = {
		dataTextField: 'name',
		dataSource: $scope.countries,
		template: 'Code: #: code#<br>Name: #: name#',
	}
}]);
