module TextPage {
    export class Controller {
        static $inject = ['$scope'];

        //private showText: boolean;


        constructor(private $scope: TextScope) {
            $scope.showText = false;
            $scope.toggleText = function () {
                $scope.showText = !$scope.showText;
            };
            $scope.shouldShowText = function () {
                return $scope.showText;
            };
            //$scope.texts = [
            //    {
            //        author: "Johnathan Miles",
            //        imageUrl: "Resources/Text/An Amnesiac's Stories web.jpg",
            //        bookLink: "http://www.newspaperclub.com/yvonnefeng/byp4x9pc-yvonne-feng-an-amnesiac-s-stories",
            //        textUrl: ""
            //    }
            //        ];
            //this.selectedText = null;
        }


    }

    interface TextScope extends ng.IScope {
        //selectedText: Text;
        //texts: Text[];
        showText: boolean;
        toggleText: () => void;
        shouldShowText: () => boolean;
    }

    //export class Text {
    //    author: string;
    //    bookLink: string;
    //    imageUrl: string;
    //    textUrl: string;
    //}
}