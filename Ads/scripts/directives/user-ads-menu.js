/**
 * Created by Evstati on 10.1.2015 г..
 */
app.directive('userAdsMenu', function () {
	return{
		controller: 'UserAdsCtrl',
		restrict: 'E',
		templateUrl: 'templates/directives/user-ads-menu.html',
		replace: true
	};
});