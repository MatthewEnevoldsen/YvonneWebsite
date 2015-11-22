/// <reference path="../helpers/arrays.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/underscore/underscore.d.ts" />
/// <reference path="imagecontroller.ts" />
var Images;
(function (Images) {
    var Manager = (function () {
        function Manager(images, $location) {
            this.images = images;
            this.selectImage = function (newPicture) {
                this.selectedImage = newPicture;
            };
            this.selectImageById = function (id) {
                this.selectImage(_.filter(this.images.images, function (image) { return image.id == id; })[0]);
                this.location.path('/Collections/' + this.images.name + '/' + id.toString());
            };
            this.unselectImage = function () {
                this.selectImage(null);
                this.location.path('/Collections/' + this.images.name);
            };
            this.isImageSelected = function () {
                return this.selectedImage != null;
            };
            this.selectNextImage = function () {
                this.selectImageById((this.selectedImage.id + 1) % this.images.images.length);
            };
            this.selectPreviousImage = function () {
                this.selectImageById((this.selectedImage.id - 1) % this.images.images.length);
            };
            this.selectedImage = null;
            this.location = $location;
        }
        return Manager;
    })();
    Images.Manager = Manager;
    var ImageCollection = (function () {
        function ImageCollection() {
        }
        return ImageCollection;
    })();
    Images.ImageCollection = ImageCollection;
})(Images || (Images = {}));
//# sourceMappingURL=imageManager.js.map