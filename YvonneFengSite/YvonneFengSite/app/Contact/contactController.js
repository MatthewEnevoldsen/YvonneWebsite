var Contact;
(function (Contact) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "Yvonne.wyf@gmail.com";
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    Contact.Controller = Controller;
})(Contact || (Contact = {}));
//# sourceMappingURL=contactController.js.map