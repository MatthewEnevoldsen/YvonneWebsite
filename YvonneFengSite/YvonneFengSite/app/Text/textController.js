var TextPage;
(function (TextPage) {
    var Controller = (function () {
        //private showText: boolean;
        function Controller($scope) {
            this.$scope = $scope;
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
        return Controller;
    }());
    Controller.$inject = ['$scope'];
    TextPage.Controller = Controller;
    //export class Text {
    //    author: string;
    //    bookLink: string;
    //    imageUrl: string;
    //    textUrl: string;
    //}
})(TextPage || (TextPage = {}));
//# sourceMappingURL=textController.js.map