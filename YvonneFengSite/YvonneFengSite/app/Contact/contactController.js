var Contact;
(function (Contact) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "Yvonne.ywf@gmail.com";
        }
        return Controller;
    }());
    Controller.$inject = ['$scope'];
    Contact.Controller = Controller;
})(Contact || (Contact = {}));
//# sourceMappingURL=contactController.js.map