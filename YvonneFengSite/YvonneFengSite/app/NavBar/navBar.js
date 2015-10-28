var NavBar;
(function (NavBar) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "Yvonne.wyf@gmail.com";
            $scope.name = "Whatup";
            $scope.items = [
                "The first choice!",
                "And another choice for you.",
                "but wait! A third!"
            ];
            $scope.title = "the title";
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    NavBar.Controller = Controller;
})(NavBar || (NavBar = {}));
//# sourceMappingURL=navBar.js.map