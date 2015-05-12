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
    }
}