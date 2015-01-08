/**
 * Created by Evstati on 7.1.2015 г..
 */
'use strict';

app.controller('LoginCtrl', ['$scope', '$location','userData', function ($scope, $location,userData) {
	$scope.login = function (user) {

		userData.login(user)
			.$promise
			.then(function (data) {
				$location.path('/');
			});
	}
}]);