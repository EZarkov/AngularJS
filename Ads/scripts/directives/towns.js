/**
 * Created by Evstati on 7.1.2015 г..
 */
app.directive('towns', function () {
	return{
		controller: 'TownsCtrl',
		restrict: 'E',
		templateUrl: 'templates/directives/towns.html',
		replace: true
	};
});