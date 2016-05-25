var Home;
(function (Home) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "";
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    Home.Controller = Controller;
})(Home || (Home = {}));
//# sourceMappingURL=homeController.js.map