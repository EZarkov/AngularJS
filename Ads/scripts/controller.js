/**
 * Created by Evstati on 22.12.2014 г..
 */
'use strict';
var app = app || {};

app.controller('Main', function ($scope) {

	$scope.ads = 'Home';
	$scope.user = 'Gosho';


	var templates = {};
	templates.header =  'templates/header.html';
	templates.navigation =  'templates/navigation.html';
	templates.loginNav =  'templates/loginNav.html';
	templates.ads =  'templates/ads.html';
	templates.categories =  'templates/categories.html';
	templates.towns =  'templates/towns.html';
	templates.footer =  'templates/footer.html';



	$scope.templates = templates;
});
