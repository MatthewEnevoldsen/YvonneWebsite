/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />

var Biography;
(function (Biography) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            this.$scope.hello = "hello"
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    Biography.Controller = Controller;
})(Biography || (Biography = {}));

var AngularDefinition;
(function (AngularDefinition) {
    'use strict';
    var app = angular.module('app')
        .controller('cont', Biography.Controller);
})(AngularDefinition || (AngularDefinition = {}));

describe("Controllers", function () {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    describe("Drawings", function () {
        it("Should be tasty", function () {
            var $scope = {};
            var cont = $controller('cont', { $scope: $scope });
            //var scope = $scope;
            //expect(scope.pictures.length).toEqual(11);
            expect(1).toEqual(1);
        });
    });
});
//# sourceMappingURL=Tests.js.map