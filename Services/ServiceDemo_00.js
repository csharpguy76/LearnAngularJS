angular.module('app', ['appControllerModule', 'appServiceModule'])
	.config(['messageServiceThreeProvider', function(messageServiceThreeProvider) {
		messageServiceThreeProvider.setName('Provider');
	}]);
