var News;
(function (News) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "Yvonne.wyf@gmail.com";
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    News.Controller = Controller;
})(News || (News = {}));
//# sourceMappingURL=newsController.js.map