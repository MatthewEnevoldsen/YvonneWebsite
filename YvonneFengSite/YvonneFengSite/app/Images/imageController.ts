/// <reference path="../shared/resizedirective.ts" />

module Images {

    export class Controller {
        static $inject = ['$scope', '$routeParams', '$location', '$window'];

        public manager: Images.Manager;

        constructor(  $scope: ImageScope,
                        $routeParams: ImagesRouteService,
                        $location: ng.ILocationService,
                        $window: ng.IWindowService,
                        pictures: Images.ImageDetails[]) {
            this.manager = new Images.Manager(pictures, $location);
            $scope.height = 100;
            $scope.manager = this.manager;
            $scope.$window = $window;
            $scope.$watch('$window.innerHeight.toString', function () {
                $scope.height = $scope.height + 100;
            }, false);
            $scope.picStyle = function (): PictureStyle {
                return { width: "auto", height: $window.innerHeight * 0.8 + "px" };
            }
            if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
    }

    export interface ImageScope extends Shared.ResizeScope {
        manager: Images.Manager;
        picStyle: () => PictureStyle;
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