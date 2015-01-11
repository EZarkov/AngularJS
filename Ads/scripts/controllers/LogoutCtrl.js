app.controller('LogoutCtrl', ['$scope', '$location','$timeout', 'authentication', 'userData', function ($scope, $location,$timeout, authentication, userData) {
	'use strict';


	$scope.pageTitle = 'Log Out';

	authentication.removeUser();
	function logout(){

		authentication.removeUser();
		$timeout(function () {
			$location.path('/');
			$scope.showSuccessAlert = false;
		}, 2000);


	};

	logout();




}]);