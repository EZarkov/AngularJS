/**
 * Created by Evstati on 9.1.2015 г..
 */
app.directive('userAds', function () {
	return{
		controller: 'UserAdsCtrl',
		restrict: 'E',
		templateUrl: 'templates/directives/user-ads.html',
		replace: true
	};
});