

module AngularDefinition {
    'use strict';

    var app = angular.module('YvonnesArt', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
        .controller('biographyController', Biography.Controller)
        .controller('homeController', Home.Controller)
        .controller('contactController', Contact.Controller)
        .controller('drawingsController', Drawings.Controller)
        .controller('drawingController', Drawings.Controller)
        .controller('navBarController', NavBar.Controller)
        .config(function ($routeProvider: ng.route.IRouteProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/Home/Home.html',
            controller: 'homeController'
        }).when('/Home', {
            templateUrl: 'app/Home/Home.html',
            controller: 'homeController'
        }).when('/Biography', {
            templateUrl: 'app/Biography/Biography.html',
            controller: 'biographyController'
        }).when('/Contact', {
            templateUrl: 'app/Contact/Contact.html',
            controller: 'contactController'
        }).when('/Drawings', {
            templateUrl: 'app/Images/Images.html',
            controller: 'drawingsController'
        }).when('/Drawings/:imageId', {
            templateUrl: 'app/Images/Images.html',
            controller: 'drawingsController'
        }).when('/Drawings/:imageId', {
            templateUrl: 'app/Images/Images.html',
            controller: 'drawingsController'
        })
            //.when('/Paintings', {
            //templateUrl: 'app/Images/Images.html',
            //controller: 'paintingsController'
            //})
            .otherwise('/');
    });
}

document.title = "Yvonne Feng";

