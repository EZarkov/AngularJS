/**
 * Created by Evstati on 7.1.2015 г..
 */
app.directive('leftPublicSidebar', function () {
		return{
			controller: 'HomeCtrl',
			restrict: 'E',
			templateUrl: 'templates/public/left-sidebar.html',
			replace: true
		};
});