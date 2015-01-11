/**
 * Created by Evstati on 11.1.2015 г..
 */
/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('AdminCtrl', ['$scope','$timeout', '$location', 'authentication', 'adsData','filter', function($scope,$timeout,$location, authentication, adsData, filter){

if( !authentication.isAdmin()){
	console.log('aaaa');
	$location.path('#/');
}

	//$scope.isAdmin= authentication.isAdmin();

	//console.log($scope.isAdmin);


	$scope.isLoggedIn = authentication.isLoggedIn();
	if($scope.isLoggedIn){


		$scope.user = authentication.getUser().username;
	} else {

		console.log("AAAA");
		//$location.path('#/');
	}

$scope.clear= function clear() {
	localStorage.clear();
	$location.path('#/');
}
}]);

