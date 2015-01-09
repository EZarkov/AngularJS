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

	function clearCategoryFilter() {
		filterParams.categoryId = null;
	}
	function clearTownFilter() {
		filterParams.townId = null;
	}

	function setPage(startpage) {
			filterParams.startpage =startpage;
	}

	function setAdsPerPage(pageSize) {
		filterParams.pagesize = pageSize;
	}

	return {
		filterByCategory: filterByCategory,
		filterByTown: filterByTown,
		getFilterParams: getFilterParams,
		clearTownFilter: clearTownFilter,
		clearCategoryFilter:clearCategoryFilter,
		setPage:setPage,
		setAdsPerPage: setAdsPerPage
	}

});