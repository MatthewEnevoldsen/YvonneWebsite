module NavBar {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: NavBarScope) {
            $scope.message = "Yvonne.wyf@gmail.com";
            $scope.name = "Whatup";
            $scope.items = [
                "The first choice!",
                "And another choice for you.",
                "but wait! A third!"
            ];
            $scope.title = "the title";
        }
    }

    interface NavBarScope extends ng.IScope {
        message: string
        name: string
        items: string[]
        title: string
    }
}

