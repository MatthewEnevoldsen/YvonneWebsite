module Home {
    export class Controller {
        static $inject = ['$scope'];

        constructor(private $scope: ContactScope) {
            $scope.message = "What up mother fuckers! welcome to the website. I do love my flavour text";
        }
    }

    interface ContactScope extends ng.IScope {
        message: string
    }
} 