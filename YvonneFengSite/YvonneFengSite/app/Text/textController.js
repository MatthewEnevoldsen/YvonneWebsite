var TextPage;
(function (TextPage) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.showText = false;
            $scope.toggleText = function () {
                $scope.showText = !$scope.showText;
            };
            $scope.shouldShowText = function () {
                return $scope.showText;
            };
        }
        return Controller;
    }());
    Controller.$inject = ['$scope'];
    TextPage.Controller = Controller;
})(TextPage || (TextPage = {}));
