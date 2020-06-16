var News;
(function (News) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "Yvonne.wyf@gmail.com";
        }
        return Controller;
    }());
    Controller.$inject = ['$scope'];
    News.Controller = Controller;
})(News || (News = {}));
