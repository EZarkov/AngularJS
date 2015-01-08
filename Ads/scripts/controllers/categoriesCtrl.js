/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('categoriesCtrl', ['$scope', 'townsData', function($scope, townsData){
	townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;
		})
}]);
