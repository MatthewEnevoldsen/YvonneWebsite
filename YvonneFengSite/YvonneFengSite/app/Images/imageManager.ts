/// <reference path="../helpers/arrays.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/underscore/underscore.d.ts" />
/// <reference path="imagecontroller.ts" />

module Images {
    export class Manager {
        private location: ng.ILocationService;

        public selectedImage: ImageDetails;
        public selectImage = function (newPicture: ImageDetails) {
            this.selectedImage = newPicture;
        };
        public selectImageById = function (id: number) {
            this.selectImage(_.filter(this.images.images, function (image: ImageDetails) { return image.id == id; })[0]);
            this.location.path('/Collections/' + this.images.name + '/' + id.toString());
        };
        public unselectImage = function () {
            this.selectImage(null);
            this.location.path('/Collections/' + this.images.name);
        };
        public isImageSelected = function () {
            return this.selectedImage != null;
        };
        public selectNextImage = function () {
            this.selectImageById((this.selectedImage.id + 1) % this.images.images.length);
        };
        public selectPreviousImage = function () {
            this.selectImageById((this.selectedImage.id - 1) % this.images.images.length);
        };

        constructor(public images: ImageCollection,  $location: ng.ILocationService) {
            this.selectedImage = null;
            this.location = $location;
        }
    }

    export interface ImageDetails {
        id: number;
        path: string;
        name: string;
        year: number;
        medium: string;
        width: number;
        height: number;
    }

    export class ImageCollection {
        public name: string;
        public images: ImageDetails[];
    }
}