/**
 * Created by Evstati on 7.1.2015 г..
 */
app.directive('categories', function () {
	return{
		controller: 'CategoriesCtrl',
		restrict: 'E',
		templateUrl: 'templates/directives/categories.html',
		replace: true
	};
});