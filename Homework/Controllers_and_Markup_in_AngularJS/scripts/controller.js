'use strict';

var app = app || {};



app.controller('videoSystem', function ($scope) {

	var student = {
		name: 'Pesho',
		photo: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
		grade: 5,
		school: 'High School of Mathematics',
		teacher: 'Gichka Pesheva'
	};
	$scope.student = student;




	var videos = [
		{
			title: 'Course introduction',
			pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
			length: '3:32',
			category: 'IT',
			subscribers: 3,
			date: new Date(2014, 12, 15),
			haveSubtitles: false,
			comments: [
				{
					username: 'Pesho Peshev',
					content: 'Congratulations Nakov',
					date: new Date(2014, 12, 15, 12, 30, 0),
					likes: 3,
					websiteUrl: 'http://pesho.com/'
				},
				{
					username: 'Gosho Goshev',
					content: 'Congratulations Nakov',
					date: new Date(2014, 12, 16, 12, 30, 0),
					likes: 3,
					websiteUrl: 'http://gosho.com/'
				},
				{
					username: 'Tosho Toshev',
					content: 'Congratulations Nakov',
					date: new Date(2014, 17, 15, 12, 30, 0),
					likes: 3,
					websiteUrl: 'http://tosho.com/'
				}
			]
		},
		{
			title: ' A Course introduction camera',
			pictureUrl: 'http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png',
			length: '3:33',
			category: 'C#',
			subscribers: 5,
			date: new Date(2014, 12, 12),
			haveSubtitles: true,
			comments: [
				{
					username: 'Pesho Peshev',
					content: 'Congratulations Vladi',
					date: new Date(2014, 12, 15, 14, 30, 0),
					likes: 3,
					websiteUrl: 'http://pesho.com/'
				},
				{
					username: 'Gosho Goshev',
					content: 'Congratulations Vladi',
					date: new Date(2014, 12, 16, 14, 30, 0),
					likes: 3,
					websiteUrl: 'http://gosho.com/'
				},
				{
					username: 'Tosho Toshev',
					content: 'Congratulations Vladi',
					date: new Date(2014, 17, 15, 14, 30, 0),
					likes: 3,
					websiteUrl: 'http://tosho.com/'
				}
			]
		}
	];



	$scope.videos = videos;


});