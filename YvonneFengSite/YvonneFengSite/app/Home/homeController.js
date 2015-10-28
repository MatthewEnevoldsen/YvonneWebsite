var Home;
(function (Home) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "What up mother fuckers! welcome to the website. I do love my flavour text";
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    Home.Controller = Controller;
})(Home || (Home = {}));
//# sourceMappingURL=homeController.js.map