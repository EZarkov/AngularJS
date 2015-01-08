/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('PublicAdsCtrl', ['$scope', 'adsData','filter', function($scope, adsData, filter){

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

	$scope.$on('categoryClicked', function (event, category) {
		$scope.ready = false;
		loadPublickAds(filter.getFilterParams());
	})

	$scope.$on('townClicked', function (event, category) {
		$scope.ready = false;
		loadPublickAds(filter.getFilterParams());
	})
}]);
