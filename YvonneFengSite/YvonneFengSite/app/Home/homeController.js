var Home;
(function (Home) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "";
        }
        return Controller;
    }());
    Controller.$inject = ['$scope'];
    Home.Controller = Controller;
})(Home || (Home = {}));
//# sourceMappingURL=homeController.js.map