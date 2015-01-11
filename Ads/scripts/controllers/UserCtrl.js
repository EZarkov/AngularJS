app.controller('UserCtrl',  ['$scope','$location','authentication', function ($scope,$location, authentication) {
	$scope.pageTitle = 'Home';
	//
	$scope.isLoggedIn = authentication.isLoggedIn();
var isAdmin = authentication.isAdmin();
	console.log(isAdmin);


	if(isAdmin){
		$location.path('/admin/home');
	}



	if($scope.isLoggedIn){
		$scope.user = authentication.getUser().username;
	} else {

	console.log("AAAA");
	$location.path('#/');
}
	
	
	

	$scope.logout = function logout (){

		$location.path('#/logout');
		authentication.removeUser();
		$scope.isLoggedIn = false;


	};
}]);