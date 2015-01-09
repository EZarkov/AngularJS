app.controller('UserCtrl',  ['$scope','authentication', function ($scope, authentication) {
	$scope.pageTitle = 'Home';
	//
	$scope.isLoggedIn = authentication.isLoggedIn();

	if($scope.isLoggedIn){
		$scope.user = authentication.getUser().username;
	}

	$scope.logout = function logout (){
		authentication.removeUser();
		$scope.isLoggedIn = false;


	};
}]);