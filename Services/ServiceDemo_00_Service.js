angular.module('appServiceModule', []).
	factory('messageServiceOne',[function(){
		return {
			sayHello: function() {
				return 'Hello, World!';
			}
		};
	}]).
	service('messageServiceTwo', [function(){
		this.sayHello = function() {
			return 'Hello, World!';
		};
	}]);
