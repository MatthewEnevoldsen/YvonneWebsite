var Shared;
(function (Shared) {
    var MyDirective = (function () {
        function MyDirective($window) {
            //public template = '<div>{{name}}</div>';
            this.scope = {};
            // It's important to add `link` to the prototype or you will end up with state issues.
            // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
            MyDirective.prototype.link = function (scope, element, attrs) {
                var w = angular.element($window);
                scope.$watch(function () {
                    return { 'h': w.height(), 'w': w.width() };
                }, function (newVal, oldVal) {
                    scope.width = newVal.width;
                    scope.height = newVal.height;
                }, true);
                w.bind('resize', function () {
                    scope.$apply();
                });
            };
        }
        MyDirective.Factory = function () {
            var directive = function ($window) {
                return new MyDirective($window);
            };
            directive['$inject'] = ['$window'];
            return directive;
        };
        return MyDirective;
    })();
    Shared.MyDirective = MyDirective;
})(Shared || (Shared = {}));
//# sourceMappingURL=resizedirective.js.map