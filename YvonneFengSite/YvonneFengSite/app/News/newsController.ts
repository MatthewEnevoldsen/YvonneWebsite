module News {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: NewsScope) {
            $scope.message = "Yvonne.wyf@gmail.com";
        }
    }

    interface NewsScope extends ng.IScope {
        message: string
    }
}