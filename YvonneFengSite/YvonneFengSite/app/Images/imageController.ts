/// <reference path="../shared/resizedirective.ts" />

module Images {

    export class Controller {
        static $inject = ['$scope', '$routeParams', '$location'];

        public manager: Images.Manager;

        constructor(  $scope: ImageScope,
                        $routeParams: ImagesRouteService,
                        $location: ng.ILocationService,
                        pictures: Images.ImageDetails[]) {
            this.manager = new Images.Manager(pictures, $location);
            $scope.height = 100;
            $scope.manager = this.manager;
                  if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
    }

    export interface ImageScope extends ng.IScope {
        manager: Images.Manager;
        $window: ng.IWindowService;
    }

    interface PictureStyle {
        width: string;
        height: string;
    }
    
    export interface ImagesRouteService extends ng.route.IRouteParamsService {
        imageId: number;
    }
}