/// <reference path="../shared/resizedirective.ts" />
var Images;
(function (Images) {
    var Controller = (function () {
        function Controller($scope, $routeParams, $location, $window, pictures) {
            this.manager = new Images.Manager(pictures, $location);
            $scope.height = 100;
            $scope.manager = this.manager;
            $scope.$window = $window;
            $scope.$watch('$window.innerHeight.toString', function () {
                $scope.height = $scope.height + 100;
            }, false);
            $scope.picStyle = function () {
                return { width: "auto", height: $window.innerHeight * 0.8 + "px" };
            };
            if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
        Controller.$inject = ['$scope', '$routeParams', '$location', '$window'];
        return Controller;
    })();
    Images.Controller = Controller;
})(Images || (Images = {}));
//# sourceMappingURL=imagecontroller.js.map