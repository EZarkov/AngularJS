/**
 * Created by Evstati on 7.1.2015 г..
 */
app.controller('TownsCtrl', ['$scope', '$rootScope',  'townsData', 'filter', function($scope, $rootScope, townsData, filter){
		townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;
		})

	$scope.townClicked  =  function townClicked(town){
		filter.filterByTown(town);
		$rootScope.$broadcast('townClicked', town);

	};

}]);
