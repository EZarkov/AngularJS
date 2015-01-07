/**
 * Created by Evstati on 7.1.2015 г..
 */
app.directive('publicAds', function () {
	return{
		controller: 'PublicAdsCtrl',
		restrict: 'E',
		templateUrl: 'templates/public/public-ads.html',
		replace: true
	};
});