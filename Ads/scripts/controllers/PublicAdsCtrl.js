/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('PublicAdsCtrl', ['$scope', 'adsData', function($scope, adsData){
  adsData.getPublicAds()
	  .$promise
	  .then(function (data) {
		  $scope.adsData = data;
	  })
}]);
