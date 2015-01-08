/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('LoggedInSidebarCtrl',  ['$scope','authentication', function ($scope, authentication) {
	$scope.pageTitle = 'Gosho';
		console.log('aaaaaaa');
	$scope.isLoggedIn = authentication.isLoggedIn();

}]);