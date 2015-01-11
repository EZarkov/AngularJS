app.controller('HomeCtrl',  ['$scope','$location','authentication', function ($scope,$location, authentication) {
	$scope.pageTitle = 'Home';
	//
	$scope.isLoggedIn = authentication.isLoggedIn();

	if($scope.isLoggedIn){
		$scope.user = authentication.getUser().username;
		$location.path("/user/home");
	}

	$scope.logout = function logout (){

		$location.path("/logout");
		console.log('logoutHomectrl');
		authentication.removeUser();
		$scope.isLoggedIn = false;


	};
}]);