/**
 * Created by Evstati on 7.1.2015 г..
 */
app.directive('loggedInSidebar', function () {
	return{
		controller: 'LoggedInSidebarCtrl',
		restrict: 'E',
		templateUrl: 'templates/directives/logged-in-sidebar.html',
		replace: true
	};
});