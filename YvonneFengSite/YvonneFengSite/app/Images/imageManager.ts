/// <reference path="../helpers/arrays.ts" />
/// <reference path="../../scripts/typings/underscore/underscore.d.ts" />

module Images {
    export class Manager {


        constructor(public images: ImageDetails[]) {
            var shuffledImages = _.shuffle<ImageDetails>(images);
            var picturesPerRow = 6;
            var pictureColWidth = 12 / picturesPerRow;
            var pictureRows = ArrayExt.chunks(shuffledImages, picturesPerRow);
            var selectedPicture = shuffledImages[0];
            var unselectedPictures = _.rest(shuffledImages);
            var selectPicture = function (newPicture: ImageDetails) {
                selectedPicture = newPicture;
                unselectedPictures = _.filter(shuffledImages, function (pic) {
                    return pic !== newPicture;
                });
            }
        }
    }

    export interface ImageDetails {
        path: string;
        name: string;
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