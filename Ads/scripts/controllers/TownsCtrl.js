/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('TownsCtrl', ['$scope', 'townsData', function($scope, townsData){
	$scope.ready= false;
	townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;
			console.log('ready');
			$scope.ready= true;
		})
}]);
