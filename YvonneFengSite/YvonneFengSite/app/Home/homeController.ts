module Home {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: ContactScope) {
            $scope.message = "";
        }
    }

    interface ContactScope extends ng.IScope {
        message: string
    }
} 