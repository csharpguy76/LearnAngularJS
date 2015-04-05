angular.module('app',[])
.directive('helloWorld', function(){
	return {
		restrict : 'E',
		scope: {
			optionA: '=?',
			optionB: '=?'
		},
		templateUrl: 'template.html'
	}
});