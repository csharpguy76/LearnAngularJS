angular.module('appServiceModule', []).
	factory('messageServiceOne',[function(){
		return {
			sayHello: function() {
				return "Hello, World from a Factory";
			}
		};
	}]).
	service('messageServiceTwo', [function(){
		this.sayHello = function() {
			return "Hello, World from a Service";
		};
	}]);
