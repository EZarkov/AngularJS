/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('RegisterCtrl',['$scope',  'townsData', 'userData', function ($scope, townsData, userData) {

	townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;

		});
	$scope.register = function (user) {
		userData.register(user);
	}

	$scope.test = function () {
		var usr = userData.login()
		console.log(usr);
	}
}]);