/**
 * Created by Evstati on 8.1.2015 г..
 */
app.factory('filter', function(){
var filterParams = {};

	function filterByCategory(category) {

		filterParams.categoryId = category.id;
	}

	function filterByTown(town) {

		filterParams.townId = town.id;
	}

	function getFilterParams() {

		return filterParams;
	}

	return {
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getFilterParams: getFilterParams
	}

});