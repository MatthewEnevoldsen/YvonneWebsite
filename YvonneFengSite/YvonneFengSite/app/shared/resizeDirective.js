//module Shared {
//    export class MyDirective {
//        public link: (scope: ResizeScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
//        //public template = '<div>{{name}}</div>';
//        public scope = {};
//        constructor($window: ng.IWindowService) {
//            // It's important to add `link` to the prototype or you will end up with state issues.
//            // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
//            MyDirective.prototype.link = (scope: ResizeScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
//                var w = angular.element($window);
//                scope.$watch(function () {
//                    return { 'h': w.height(), 'w': w.width() };
//                }, function (newVal, oldVal) {
//                    scope.width = newVal.width;
//                    scope.height = newVal.height;
//                    }, true);
//                w.bind('resize', function () {
//                    scope.$apply();
//                });
//            };
//        }
//        public static Factory() {
//            var directive = ($window: ng.IWindowService) => {
//                return new MyDirective($window);
//            };
//            directive['$inject'] = ['$window'];
//            return directive;
//        }
//    }
//    export interface ResizeScope extends ng.IScope {
//        width: number;
//        height: number;
//    }
//}
//# sourceMappingURL=resizeDirective.js.map