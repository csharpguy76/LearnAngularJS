var app = angular.module('app.demo', []);

// Filters
app.filter('EvenNumbersOnly', [function() {
		return function(numbers) {
			var evenNumbers = [];
			for (idx in numbers)
			{
				if ((numbers[idx] % 2) == 0)
				{
					evenNumbers.push(numbers[idx]);
				}
			}
			return evenNumbers;
		}
	}
]);

app.filter('OddNumbersOnly', [function(){
		return function(numbers) {
			var oddNumbers = [];
			for (idx in numbers)
			{
				if ((numbers[idx] % 2) == 1)
				{
					oddNumbers.push(numbers[idx]);
				}
			}
			return oddNumbers;
		}
	}
]);

// Controllers
app.controller('AppController', ['$scope', function($scope) {
		$scope.numbers = [1,2,3,4,5,6,7,8,9,10];
	}
]);
