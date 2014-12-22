'use strict';
var app = app || {};

app.controller('StudentPage', function ($scope) {

	var student = {
		name: 'Pesho',
		photo: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
		grade: 5,
		school: 'High School of Mathematics',
		teacher: 'Gichka Pesheva'
	};
	$scope.student = student;


});


function Tiger ($scope){
	var tiger= {
		name: 'Pesho',
		born: 'Asia',
		birthDate: '2006',
		live: 'Sofia Zoo'
	}
	var imgUrl= 'http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg'

	var sectionStyle = {
		width: '50%',
		background: '#CACACA',
		padding: '24px',
		fondSize: '16px',
		color: '#2C3E50',
		fontFamily: 'tahoma, verdana,  helvetica, sans-serif'
	};


	var inlineBlock = {
		width: '48%',
		display: 'inline-block',
		verticalAlign: 'top'
	};

	var bold = {
		fontWeight: 'bold'
	};
	var img = {
		margin: '20px 0 0 0',
		width: '48%',
		display: 'inline-block',
		verticalAlign: 'top'

	}
	$scope.tiger = tiger;
	$scope.imgUrl = imgUrl;
	$scope.sectionStyle = sectionStyle;
	$scope.inlineBlock = inlineBlock;
	$scope.bold = bold;
	$scope.img = img;



}