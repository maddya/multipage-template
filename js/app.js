//pass in $firebaseAuth, $firebaseObject, $firebaseArray(?) to function in controller(s?)
// Create a variable 'ref' to reference your firebase storage
//var ref = new Firebase('https://maddya-portfolio.firebaseio.com/');

var myApp = angular.module('myApp', ['ui.router', 'firebase'])

// Config route provider
.config(function($stateProvider) { $stateProvider
	.state('home', {
		url:'/',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	.state('content', {
		url:'/content',
		templateUrl: 'templates/content.html',
		controller: 'ContentController',
	})
	.state('about', {
		url:'/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutController',
	})
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope, $firebaseObject, $firebaseArray){
	var ref = new Firebase('https://maddya-portfolio.firebaseio.com/');
	var homeObject = $firebaseObject(ref.child('home'));
	//$scope.title = homeObject['title'];
	//var test = ref.child('home').child('title').title;
	//alert(test)
	//console.log(test);
	//alert($scope.title)
	//alert($scope.title)
	//var homeObject = $firebaseObject(homeRef);
	$scope.title = 'a brief background';
	//alert($scope.title)
	return false;
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope, $firebaseAuth, $firebaseObject){
	var ref = new Firebase('https://maddya-portfolio.firebaseio.com/');
	var homeObject = $firebaseObject(ref.child('contact'));
	$scope.title = 'get in touch'
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
 	$scope.title = 'my latest projects';

	$('#dawg-coffee').mouseenter(function() {	
		$("#dawg-coffee .darken").css({"opacity" : ".65"})
	});
	$('#dawg-coffee').mouseleave(function() {
		$("#dawg-coffee .darken").css({"opacity" : "0"})
	});
	$('#police-shooting').mouseenter(function() {	
		$("#police-shooting .darken").css({"opacity" : ".65"})
	});
	$('#police-shooting').mouseleave(function() {
		$("#police-shooting .darken").css({"opacity" : "0"})
	});
	$('#tweety').mouseenter(function() {	
		$("#tweety .darken").css({"opacity" : ".65"})
	});
	$('#tweety').mouseleave(function() {
		$("#tweety .darken").css({"opacity" : "0"})
	});
	$('#spotify-challenge').mouseenter(function() {	
		$("#spotify-challenge .darken").css({"opacity" : ".65"})
	});
	$('#spotify-challenge').mouseleave(function() {
		$("#spotify-challenge .darken").css({"opacity" : "0"})
	});
	$('#crud-web-app').mouseenter(function() {	
		$("#crud-web-app .darken").css({"opacity" : ".65"})
	});
	$('#crud-web-app').mouseleave(function() {
		$("#crud-web-app .darken").css({"opacity" : "0"})
	});

})




$(document).ready(function() {
	$.extend($.scrollTo.defaults, {
	  duration: 2000
	});
	scrollFunction = function() {
		var position = $('#mainContent').offset();
		$('html,body').animate({
          scrollTop: position.top,
          easing: 'swing'
        }, 1000);
     };

	$('#text').fadeToggle(1, function() {
		$(this).fadeToggle(2000)
		window.setTimeout(function(){ 
			$('.down').fadeIn(2000);
		}, 1000);
	})

	$('.down').click(scrollFunction)
	$('#homeClick').click(scrollFunction)
	$('#projectClick').click(scrollFunction)
	$('#contactClick').click(scrollFunction)

	$('#homeButton').click(function() {
		$('html,body').animate({
          scrollTop: 0,
          easing: 'swing'
        }, 1000);
	})
	
});