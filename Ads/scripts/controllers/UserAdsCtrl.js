/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('UserAdsCtrl', ['$scope','$timeout', 'authentication', 'adsData','filter', function($scope,$timeout, authentication, adsData, filter){

	$scope.isAdmin= authentication.isAdmin();

	console.log($scope.isAdmin);


	$scope.isLoggedIn = authentication.isLoggedIn();
	if($scope.isLoggedIn){


		$scope.user = authentication.getUser().username;
	} else {
		
		console.log("AAAA");
		$location.path('#/');
	}
	$scope.startPage = 1;
	$scope.currentPage = 1;
	$scope.pageSize = 2;
	$scope.pageTitle = 'My Ads';

	function loadUserAds(filterParams) {
		var	filterParams = filterParams || {};
		var headers = authentication.getHeaders();

		adsData.getUserAds(filterParams, headers)
			.$promise
			.then(function (data) {
				$scope.adsData = data;

				$scope.ready = true;
			})
	}
	loadUserAds();

	$scope.adStatusFilter = function adStatusFilter(filter) {
		console.log(filter);
		$scope.adfilter = filter;
	}


	function deactivateUserAds(adId) {
		var headers = authentication.getHeaders();

		adsData.deactivateAd(adId, headers)
			.$promise
			.then(function (data) {
				$scope.showDeactivateAlert = true;
				$scope.errorTextAlert = data.message;
				loadUserAds();
				$timeout(function (){

					$scope.showDeactivateAlert = false;
				}, 5000)

				$scope.ready = true;
			})
	}


	function publishAgeinAd (adId){
		var headers = authentication.getHeaders();

		adsData.publishAgainAd(adId, headers)
			.$promise
			.then(function (data) {
				console.log(data.message);
				$scope.showActivateAlert = true;
				$scope.successTextAlert = data.message;
				loadUserAds();
				$timeout(function (){

					$scope.showActivateAlert = false;
				}, 5000)

				$scope.ready = true;
			})

	}
	$scope.switchBool = function (value) {
		$scope[value] = !$scope[value];
	};



	$scope.deactivateAdClicked = function deactivateAdClicked(adId) {
		deactivateUserAds(adId);
	}
	$scope.publishAgeinAdClicked = function deactivateAdClicked(adId) {
		publishAgeinAd(adId);
	}

	$scope.pageChanged = function pageChanged() {
		console.log($scope.currentPage);
		filter.setPage($scope.currentPage);
		loadUserAds(filter.getFilterParams());
	}

	$scope.setAdsPerPage = function setAdsPerPage(n) {
		console.log(n);
		filter.setAdsPerPage(n);
		$scope.pageSize = n
		loadUserAds(filter.getFilterParams());
	}


}]);

