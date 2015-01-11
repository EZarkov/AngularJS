/**
 * Created by Evstati on 7.1.2015 г..
 */
'use strict';

app.controller('LoginCtrl', ['$scope', '$location', '$timeout','userData', function ($scope, $location, $timeout, userData) {

	$scope.pageTitle = 'Login';
	$scope.showSuccessAlert = false;
	$scope.showErrorAlert = false;

	$scope.switchBool = function (value) {
		$scope[value] = !$scope[value];
	};

	$scope.login = function (user) {

		userData.login(user)
			.$promise
			.then(function (data) {
				$scope.showErrorAlert = false;
				$scope.showSuccessAlert = true;
				$scope.successTextAlert = 'Succseful Login';



				$timeout(function (){
					$location.path('/user/home');
					$scope.showSuccessAlert = false;
				}, 500)

			}
			, function (error){
				$scope.showErrorAlert = true;
				$scope.errorTextAlert = error.data.error_description;


				console.log(error.data.error_description);
			});
	}
}]);