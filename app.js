var app = angular.module("myApp", []);

app.controller('formController', formController);
app.filter('genderFilter', genderFilter)

/////////////////////
function formController($scope){
	$scope.submit = function(){
		if($scope.myForm.$valid){
			console.log("the form is valid")
			$scope.submitted = true;
		}else{
			console.log("the form is invalid")
			$scope.submitted = false;
		}	    
	}
	$scope.reset = function(){
		$scope.submitted = false;
		$scope.data = {};
		$scope.myForm.$setPristine();
	}
	$scope.pattern = /^\d+$/
}

function genderFilter(){
	genderMap = {
		'his': 'her',
		'he':'she',
		'him':'her'
	}
	return function(input, gender){
		var output = (gender === 'male') ? input : genderMap[input]
		return output
	}
}