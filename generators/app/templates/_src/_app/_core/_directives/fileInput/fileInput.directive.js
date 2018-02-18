'use strict';

export default function(app) {

    app
        .directive('fileInput', directive);

    function directive() {
        var directive = {
            restrict: "EA",
            template: "<input type='file' />",
            replace: true
        };
        return directive;

        function link(scope, element, attrs, ngModelCtrl) {
            var modelGet = $parse(attrs.fileInput);
            var modelSet = modelGet.assign;
            var onChange = $parse(attrs.onChange);

            var updateModel = function() {
                scope.$apply(function() {
                    modelSet(scope, element[0].files[0]);
                    onChange(scope);
                });
            };

            element.bind('change', updateModel);
        }
    }
}