module Images {

    export class Controller {
        static $inject = ['$scope', '$routeParams', '$location'];

        public manager: Images.Manager;

        constructor($scope: ImageScope, $routeParams: ImagesRouteService, $location: ng.ILocationService, pictures: Images.ImageDetails[]) {
            this.manager = new Images.Manager(pictures, $location);
            $scope.manager = this.manager;
            if ($routeParams.imageId)
                this.manager.selectImageById($routeParams.imageId);
        }
    }

    //export class SingleController {
    //    static $inject = ['$scope', '$routeParams', '$location'];

    //    public manager: Images.Single;

    //    constructor($scope: ImageScope, $routeParams: ImagesRouteService, $location: ng.ILocationService, pictures: Images.ImageDetails[]) {
    //        this.manager = new Images.Single(pictures, $location);
    //        $scope.manager = this.manager;
    //        if ($routeParams.imageId)
    //            this.manager.selectImageById($routeParams.imageId);
    //    }
    //}

    //export class CollectionController {
    //    static $inject = ['$scope', '$routeParams', '$location'];

    //    public manager: Images.Collection;

    //    constructor($scope: ImageCollectionScope, $routeParams: ImagesRouteService, $location: ng.ILocationService, pictures: Images.ImageDetails[]) {
    //        this.manager = new Images.Collection(pictures, $location);
    //        $scope.manager = this.manager;
    //        if ($routeParams.imageId)
    //            this.manager.selectImageById($routeParams.imageId);
    //    }


    //}

    export interface ImageScope extends ng.IScope {
        manager: Images.Manager;
    }

 // export interface ImageCollectionScope extends ng.IScope {
 //     manager: Images.Collection;
 // }

    export interface ImagesRouteService extends ng.route.IRouteParamsService {
        imageId: number;
    }
}