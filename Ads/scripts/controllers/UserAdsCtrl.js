/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('UserAdsCtrl', ['$scope', 'authentication', 'adsData','filter', function($scope, authentication, adsData, filter){


	$scope.isLoggedIn = authentication.isLoggedIn();
	if($scope.isLoggedIn){
		$scope.user = authentication.getUser().username;
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
				console.log(data);
				$scope.ready = true;
			})
	}
	loadUserAds();

	$scope.pageChanged = function pageChanged() {
		console.log($scope.currentPage);
		filter.setPage($scope.currentPage);
		loadPublickAds(filter.getFilterParams());
	}

	$scope.setAdsPerPage = function setAdsPerPage(n) {
		console.log(n);
		filter.setAdsPerPage(n);
		$scope.pageSize = n
		loadPublickAds(filter.getFilterParams());
	}


	$scope.$on('categoryClicked', function (event, category) {
		$scope.ready = false;
		loadPublickAds(filter.getFilterParams());
	})

	$scope.$on('townClicked', function (event, category) {
		$scope.ready = false;
		loadPublickAds(filter.getFilterParams());
	})

	$scope.$on('allCategories', function (event) {
		$scope.ready = false;
		loadPublickAds(filter.getFilterParams());
	})

	$scope.$on('allTowns', function (event) {
		$scope.ready = false;
		loadPublickAds(filter.getFilterParams());
	})
}]);

