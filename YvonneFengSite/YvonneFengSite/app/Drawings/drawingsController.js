/// <reference path="../images/imagemanager.ts" />
/// <reference path="../images/imagecontroller.ts" />
/// <reference path="../../scripts/typings/underscore/underscore.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Drawings;
(function (Drawings) {
    var Controller = (function (_super) {
        __extends(Controller, _super);
        function Controller($scope, $routeParams, $location) {
            var fileList = [
                "Resources/Drawings/large/10pm, 2014, ink on paper, 53 x 38 cm.jpg",
                "Resources/Drawings/large/C0415, 2014, ink on Chinese paper, 45.5 x 69.5.jpg",
                "Resources/Drawings/large/Chop, 2014, ink on paper, 42 x 29.7 cm.jpg",
                "Resources/Drawings/large/Hand, ink on paper, 42 x 29.7 cm.jpg",
                "Resources/Drawings/large/Scan, charcoal on paper, 38 x 26 cm.jpg",
                "Resources/Drawings/large/Sit, 2014, ink on paper, 42 x 29.7 cm.jpg",
                //"Resources/Drawings/large/You are one of us, 2014, ink on Chinese paper, 45.5 x 69.5cm.",
                "Resources/Drawings/large/Sleepless five years ahead, 2014, ink on paper, 53 x 38cm.jpg",
                "Resources/Drawings/large/Spray, ink on paper, 42 x 29.7 cm.jpg",
                "Resources/Drawings/large/Unblock, 2014, ink on paper, 53 x 38 cm.jpg",
                "Resources/Drawings/large/_1.jpg"
            ];
            var id = 1;
            var imageDetails = fileList.map(function (filepath) {
                return { id: id++, path: filepath, name: Filepaths.getFilename(filepath), year: 3000, medium: "Crayon", width: 100, height: 100 };
            });
            _super.call(this, $scope, $routeParams, $location, imageDetails);
        }
        Controller.$inject = ['$scope', '$routeParams', '$location'];
        return Controller;
    })(Images.Controller);
    Drawings.Controller = Controller;
})(Drawings || (Drawings = {}));
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
//# sourceMappingURL=drawingsController.js.map