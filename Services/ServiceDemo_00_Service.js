angular.module('appServiceModule', []).
	provider('messageServiceThree', function() {
		var name;
		
		this.setName = function (value)
		{
			name = value;
		};
		
		this.$get = function() {
			return {
				sayHello: 'Hello, World! from ' + name
			}
		};
	}).
	factory('messageServiceOne',function(){
		return {
			sayHello: 'Hello, World! from Factory'
		};
	}).
	service('messageServiceTwo', function(){
		this.sayHello = 'Hello, World! from Service';
	});
