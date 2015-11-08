/// <reference path="../helpers/arrays.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/underscore/underscore.d.ts" />

module Images {
    export class Manager {
        private location: ng.ILocationService;

        public selectedImage: ImageDetails;
        public selectImage = function (newPicture: ImageDetails) {
            this.selectedImage = newPicture;
        };
        public selectImageById = function (id: number) {
            this.selectImage(this.images.filter(function (image: ImageDetails) { return image.id == id; })[0]);
            this.location.path('/Drawings/' + id.toString());
        };
        public unselectImage = function () {
            this.selectImage(null);
            this.location.path('/Drawings');
        };
        public isImageSelected = function () {
            return this.selectedImage != null;
        };
        public selectNextImage = function () {
            this.selectImageById((this.selectedImage.id + 1) % this.images.length);
        };
        public selectPreviousImage = function () {
            this.selectImageById((this.selectedImage.id - 1) % this.images.length);
        };

        constructor(public images: ImageDetails[],  $location: ng.ILocationService) {
            this.selectedImage = null;
            this.location = $location;
        }
    }

    export interface ImageDetails {
        id: number;
        path: string;
        name: string;
        //year: number;
        
    }
}

//module Drawings {
//    export class Controller {
//        static $inject = ['$scope'];
//        constructor($scope: DrawingsScope) {
//            var fileList: ImageDetails[] = [
//                new ImageDetails("10pm", 2014, "ink on paper", 53, 38),
//                new ImageDetails("C0415", 2014, "ink on Chinese paper", 45.5, 69.5),
//                new ImageDetails("Chop", 2014, "ink on paper", 42, 29.7),
//                new ImageDetails("Hand", 0, "ink on paper", 42, 29.7),
//                new ImageDetails("Scan", 0, "charcoal on paper", 38, 26),
//                new ImageDetails("Sit", 2014, "ink on paper", 42, 29.7),
//                new ImageDetails("You are one of us", 2014, "ink on Chinese paper", 45.5, 69.5),
//                new ImageDetails("Sleepless five years ahead", 2014, "ink on paper", 53, 38),
//                new ImageDetails("Spray", 0, "ink on paper", 42, 29.7),
//                new ImageDetails("Unblock", 2014, "ink on paper", 53, 38)
//                //new ImageDetails("_1.jpg"
//            ];
//            $scope.pictures = fileList;
//        }
//    }
//    interface DrawingsScope extends ng.IScope {
//        pictures: ImageDetails[];
//    }
//    class ImageDetails {
//        constructor(
//            public name: string,
//            public year: number,
//            public medium: string,
//            public width: number,
//            public height: number,
//            public format: string = "jpg"
//            ) { }
//    }
//    enum Size {
//        large, medium, thumb
//    }
//    enum ImageCategory {
//        drawing, painting
//    }
//} 