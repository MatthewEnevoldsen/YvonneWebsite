var NavBar;
(function (NavBar) {
    var Controller = (function () {
        function Controller($scope) {
            this.$scope = $scope;
            $scope.message = "Yvonne.wyf@gmail.com";
            $scope.name = "Whatup";
            $scope.categories = [
                new Category("Work", null, [
                    new Category("Greener On The Other Side?", "#Collections/GreenerOnTheOtherSide", null),
                    new Category("The Body As Metaphor", "#Collections/BodyAsMetaphor", null),
                    new Category("Telescreens", "#Collections/Telescreens", null),
                    new Category("An Amnesiac's Stories", "#Collections/AmnesiacsStories", null),
                ]),
                new Category("Drawing", null, [
                    new Category("Sketchbook", "#Collections/Sketches", null),
                    new Category("Invisible Wall", "#Collections/InvisibleWall", null)
                ]),
                new Category("Publication", "#Publications", null),
                new Category("CV", "#Biography", null),
                new Category("News", "#News", null),
                new Category("Contact", "#Contact", null),
            ];
            $scope.title = "Home";
        }
        return Controller;
    }());
    Controller.$inject = ['$scope'];
    NavBar.Controller = Controller;
    var Category = (function () {
        function Category(title, link, subCategories) {
            this.title = title;
            this.link = link;
            this.subCategories = subCategories;
        }
        return Category;
    }());
})(NavBar || (NavBar = {}));
//# sourceMappingURL=navBarController.js.map