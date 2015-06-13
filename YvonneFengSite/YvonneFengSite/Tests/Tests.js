/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />
/// <reference path="../Scripts/angular-route.js" />
/// <reference path="../app/Drawings/drawingsController.js" />
/// <reference path="../Scripts/angular-ui/ui-bootstrap.js" />
/// <reference path="../app/app.js" />
/// <reference path="../Scripts/underscore.js" />


var app = angular.module('app', [])
                .controller('cont', function ($scope) { $scope.test = 'hello'; });


//describe("Controllers", function () {
//    var $controller;
//    beforeEach(function () {
//        module('YvonnesArt');
//        inject(function (_$controller_) {
//            $controller = _$controller_;
//        });
//    });
//    describe("Drawings", function () {
//        it("Should be tasty", function () {
//            var $scope = {};
//            var cont = $controller("drawingsController", { $scope: $scope });
//            //var scope = $scope;
//            var cont2 = new Drawings.Controller($scope);
//            //expect(scope.pictures.length).toEqual(11);
//            expect(1).toEqual(1);
//        });


//        //it('should create "phones" model with 3 phones', inject(function ($controller) {
//        //    var scope = {},
//        //        ctrl = $controller('drawingsController', { $scope: scope });

//        //    expect(scope.phones.length).toBe(3);
//        //}));
//    });



//});

describe("other", function () {
    var $controller;
    beforeEach(module('app'));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    it("blah", function () {
        var $scope = {};
        var cont = $controller('cont', { $scope: $scope });
        expect($scope.test).toEqual('hello');
    });
})

describe("other", function () {
    var $controller;
    beforeEach(module('YvonnesArt'));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    it("blah", function () {
        var $scope = {};
        var cont = $controller('drawingsController', { $scope: $scope });
        expect($scope.picturesPerRow).toEqual(6);
    });
})

//# sourceMappingURL=Tests.js.map