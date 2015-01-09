/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('RegisterCtrl', ['$scope', '$location','$timeout', 'townsData', 'userData', function ($scope, $location,$timeout, townsData, userData) {
	'use strict';


	$scope.pageTitle = 'Register';


	$scope.showSuccessAlert = false;
	$scope.showErrorAlert = false;
	$scope.switchBool = function (value) {
		$scope[value] = !$scope[value];
	};
	townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;

		});


	$scope.register = function (user) {
		userData.register(user)
			.$promise
			.then(function (data) {

				$scope.showErrorAlert = false;
				$scope.showSuccessAlert = true;
				$scope.successTextAlert = 'Succseful register';
				$timeout(function () {
					$location.path('/');
					$scope.showSuccessAlert = false;
				}, 500);
				$location.path('/');
			}, function (error) {

				$scope.showErrorAlert = true;
				console.log( error.data.modelState);
				console.log(Object.keys(error.data.modelState));

				$scope.errorTextAlert = angular.fromJson(error.data.modelState);
			});
	}

	$scope.cancel = function cancel() {
			$scope.user = {};
	}

}]);