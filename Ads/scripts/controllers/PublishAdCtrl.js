/**
 * Created by Evstati on 11.1.2015 г..
 */

app.controller('PublishAdCtrl', ['$scope', '$location','$timeout', 'townsData', 'categoriesData',  'userData','adsData', 'authentication',  function ($scope, $location,$timeout, townsData, categoriesData, userData, adsData, authentication) {
	'use strict';
console.log('aaa');

	$scope.isLoggedIn = authentication.isLoggedIn();

	if($scope.isLoggedIn){
		$scope.user = authentication.getUser().username;

	}







	$scope.pageTitle = 'Publish New Data';


	$scope.stepsModel = [];

	$scope.imageUpload = function(element){
		var reader = new FileReader();
		reader.onload = $scope.imageIsLoaded;
		reader.readAsDataURL(element.files[0]);
	}

	$scope.imageIsLoaded = function(e){
		$scope.$apply(function() {
			$scope.stepsModel.push(e.target.result);
		});
	}


	$scope.showSuccessAlert = false;
	$scope.showErrorAlert = false;
	$scope.switchBool = function (value) {
		$scope[value] = !$scope[value];


	};

	categoriesData.getCategories()
		.$promise
		.then(function (data) {
			$scope.categorys = data;

		});


	townsData.getTowns()
		.$promise
		.then(function (data) {
			$scope.towns = data;

		});


	$scope.publishAdr = function (ad){

		var headers = authentication.getHeaders();

		adsData.add(ad, headers)
			.$promise
			.then(function (data) {

				$scope.showErrorAlert = false;
				$scope.showSuccessAlert = true;
				$scope.successTextAlert = 'Succsefulpublishr';
				$timeout(function () {
					$location.path('/');
					$scope.showSuccessAlert = false;
				}, 500);
				$location.path('/');
			}, function (error) {

				$scope.showErrorAlert = true;
				console.log( error.data.modelState);
				console.log(Object.keys(error.data.modelState));

				$scope.errorTextAlert = angular.fromJson(error.data.modelState);
			});
	}

	$scope.cancel = function cancel() {
		$scope.ad = {};
	}

}]);