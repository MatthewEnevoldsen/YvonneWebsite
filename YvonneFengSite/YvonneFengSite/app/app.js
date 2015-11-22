var AngularDefinition;
(function (AngularDefinition) {
    'use strict';
    var app = angular.module('YvonnesArt', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
        .directive('resize', function ($window) {
        return function (scope, element) {
            scope.getWindowDimensions = function () {
                return {
                    'h': $window.innerHeight,
                    'w': $window.innerWidth
                };
            };
            scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
                scope.windowHeight = newValue.h;
                scope.windowWidth = newValue.w;
                scope.style = function () {
                    return {
                        'height': (newValue.h - 100) + 'px',
                        'width': (newValue.w - 100) + 'px'
                    };
                };
            }, true);
            var w = angular.element($window);
            w.bind('resize', function () {
                scope.$apply();
            });
        };
    })
        .controller('biographyController', Biography.Controller)
        .controller('homeController', Home.Controller)
        .controller('contactController', Contact.Controller)
        .controller('empty', function ($scope) { $scope.test = "hello"; })
        .controller('drawingsController', Drawings.Controller)
        .controller('drawingController', Drawings.Controller)
        .controller('navBarController', NavBar.Controller)
        .config(function ($routeProvider) {
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
            .otherwise('/');
    });
})(AngularDefinition || (AngularDefinition = {}));
document.title = "Yvonne Feng";
//# sourceMappingURL=app.js.map