module Contact {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: ContactScope) {
            $scope.message = "SomeEmail";
        }
    }

    interface ContactScope extends ng.IScope {
        message: string
    }
}