module Drawings {
    export class Controller {
        static $inject = ['$scope'];

        constructor($scope: DrawingsScope) {
            var fileList: string[] = [
                "Resources/Drawings/large/10pm, 2014, ink on paper, 53 x 38 cm.jpg",
                "Resources/Drawings/large/C0415, 2014, ink on Chinese paper, 45.5 x 69.5.jpg",
                "Resources/Drawings/large/Chop, 2014, ink on paper, 42 x 29.7 cm.jpg",
                "Resources/Drawings/large/Hand, ink on paper, 42 x 29.7 cm.jpg",
                "Resources/Drawings/large/Scan, charcoal on paper, 38 x 26 cm.jpg",
                "Resources/Drawings/large/Sit, 2014, ink on paper, 42 x 29.7 cm.jpg",
                "Resources/Drawings/large/You are one of us, 2014, ink on Chinese paper, 45.5 x 69.5cm.",
                "Resources/Drawings/large/Sleepless five years ahead, 2014, ink on paper, 53 x 38cm.jpg",
                "Resources/Drawings/large/Spray, ink on paper, 42 x 29.7 cm.jpg",
                "Resources/Drawings/large/Unblock, 2014, ink on paper, 53 x 38 cm.jpg",
                "Resources/Drawings/large/_1.jpg"
            ];
            $scope.pictures = fileList;

        }
    }

    interface DrawingsScope extends ng.IScope {
        pictures: string[];
        colWidth: (screenSize: string) => number;
        numRows: (screenSize: string) => number;
        clickImage: (imageId: number) => void;
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