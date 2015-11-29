module Contact {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: ContactScope) {
            $scope.message = "Yvonne.ywf@gmail.com";
        }
    }

    interface ContactScope extends ng.IScope {
        message: string
    }
}