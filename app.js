var app = angular.module("myApp", []);

app.controller('formController', formController);
app.filter('genderFilter', genderFilter)

/////////////////////
function formController($scope){
	$scope.submit = function(){
        $scope.submitted = true
	}

    $scope.reset = function() {
        $scope.submitted = false
        $scope.data = {}
    }
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
