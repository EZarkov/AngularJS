/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('CategoriesCtrl', ['$scope', '$rootScope', 'categoriesData', 'filter',  function($scope, $rootScope, categoriesData, filter ){


		categoriesData.getCategories()
			.$promise
			.then(function (data) {
				$scope.categories = data;
			});


	$scope.categoryClicked  =  function categoryClicked(category){
			filter.filterByCategory(category);
		$rootScope.$broadcast('categoryClicked', category);

	 };
}]);
