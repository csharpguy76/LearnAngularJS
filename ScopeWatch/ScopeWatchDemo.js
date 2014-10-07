angular.module("app",[])
.controller("ScopeWatchDemoController",["$scope", function($scope) {
	$scope.value = "";
	
	$scope.choiceAClick = function() {
		$scope.value = "Choice A";
	};
	
	$scope.choiceBClick = function() {
		$scope.value = "Choice B";
	};
	
	
	$scope.$watch('value',function(newValue, oldValue) {
			alert(oldValue);
				
			switch (newValue) {
				case "Choice A":
					alert("You have chosen A!");
					break;
				case "Choice B":
					alert("You have choice B!");
					break;
			}
	});
}]); 
