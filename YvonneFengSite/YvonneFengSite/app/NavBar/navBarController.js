var NavBar;
(function (NavBar) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "Yvonne.wyf@gmail.com";
            $scope.name = "Whatup";
            $scope.categories = [
                new Category("Bio", "#Biography", null),
                new Category("Contact", "#Contact", null),
                new Category("News", "#News", null),
                new Category("Drawings", null, [new Category("New", "#Drawings", null), new Category("Archived", "#Drawings", null)]),
                new Category("Paintings", null, [new Category("New", "#Drawings", null), new Category("Archived", "#Drawings", null)]),
            ];
            $scope.title = "Home";
        }
        Controller.$inject = ['$scope'];
        return Controller;
    })();
    NavBar.Controller = Controller;
    var Category = (function () {
        function Category(title, link, subCategories) {
            this.title = title;
            this.link = link;
            this.subCategories = subCategories;
        }
        return Category;
    })();
})(NavBar || (NavBar = {}));
//# sourceMappingURL=navBarController.js.map