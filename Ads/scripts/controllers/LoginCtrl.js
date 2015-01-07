/**
 * Created by Evstati on 7.1.2015 г..
 */
'use strict';

app.controller('LoginCtrl',['$scope', 'userData', function ($scope, userData) {
$scope.login = function (user) {
	console.log('login');
	userData.login(user);
}
}]);