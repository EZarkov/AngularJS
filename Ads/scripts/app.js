'use strict';
var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination', 'growlNotifications']);

app.constant('baseServiceUrl', 'http://localhost:1337/api/');

app.config(['$routeProvider', 'localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {


	$routeProvider.when('/',  {
		templateUrl: './templates/home.html',
		controller:'HomeCtrl'
	})
	$routeProvider.when('/login', {
		templateUrl: './templates/login.html',
		controller:'LoginCtrl'
	})
	$routeProvider.when('/register', {
		templateUrl: './templates/register.html',
		controller:'RegisterCtrl'
	})
	$routeProvider.when('/user/home', {
		templateUrl: './templates/user.html',
		controller:'UserCtrl'
	})

	$routeProvider.when('/user/ads', {
		templateUrl: './templates/user-ads.html',
		controller:'UserAdsCtrl'
	})
	$routeProvider.when('/logout', {
		templateUrl: './templates/logout.html',
		controller:'LogoutCtrl'
	})

	$routeProvider.when('/user/ads/publish', {
		templateUrl: './templates/publish-new-ad.html',
		controller:'PublishAdCtrl'
	})
	$routeProvider.when('/admin/home', {
		templateUrl: './templates/admin.html',
		controller:'AdminCtrl'
	})





	$routeProvider.otherwise({
		redirectTo: '/'
	})
	//Web storage settings
	localStorageServiceProvider.setStorageType('localStorage');
	localStorageServiceProvider.setPrefix('adsApp');
}]);