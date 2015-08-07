var app = angular.module("myApp", []);

app.controller('myCtrl', myController);
app.filter('genderFilter', genderFilter)

/////////////////////
function myController($scope){

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