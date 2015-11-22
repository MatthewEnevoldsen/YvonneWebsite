/// <reference path="../shared/resizedirective.ts" />
var Images;
(function (Images) {
    var Controller = (function () {
        function Controller($scope, $routeParams, $location, pictures) {
            this.manager = new Images.Manager(pictures, $location);
            $scope.height = 100;
            $scope.manager = this.manager;
            if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
        Controller.$inject = ['$scope', '$routeParams', '$location'];
        return Controller;
    })();
    Images.Controller = Controller;
})(Images || (Images = {}));
//# sourceMappingURL=imagecontroller.js.map