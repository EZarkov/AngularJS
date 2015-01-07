/**
 * Created by Evstati on 7.1.2015 г..
 */
app.factory('townsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {

	var resource = $resource(baseServiceUrl + 'towns');

	function getAllTowns() {
		return resource.query();
	}

	return {
		getTowns: getAllTowns
	}
}]);