/**
 * Created by Evstati on 8.1.2015 г..
 */
app.factory('categoriesData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {

	var resource = $resource(baseServiceUrl + 'categories');

	function getAllCategories() {
		return resource.query();
	}

	return {
		getCategories: getAllCategories
	}
}]);