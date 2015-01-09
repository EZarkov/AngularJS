/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('PublicAdsCtrl', ['$scope', 'adsData','filter', function($scope, adsData, filter){

	 $scope.startPage = 1;
	 $scope.currentPage = 1;
	 $scope.pageSize = 10;


	function loadPublickAds(filterParams) {
	var	filterParams = filterParams || {};
		adsData.getPublicAds(filterParams)
			.$promise
			.then(function (data) {
				$scope.adsData = data;
				$scope.ready = true;
			})
	}
	loadPublickAds();

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
