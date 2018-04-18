'use strict';

/**
 * Author - Yash
 * Example usage
 * HTML - <input name="file" type="file" on-file="vm.onFileSelect(file)" file-read-directive accept="image/jpeg" />
 * CONTROLLER
 * function onFileSelect(file) {
            //do your stuff with file here
            vm.getBase64(file);
        }
 */

export default function(app) {
    app
        .directive('fileInput', directive);

    function directive() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                onFile: '&',
                file: '@'
            },
            replace: true,
        };

        return directive;

        function link(scope, elem, attrs) {
            elem.bind('change', function(event) {
                var files = event.target.files;
                var file = files[0];
                scope.file = file;
                scope.$parent.file = file;
                scope.onFile({ file: file });
                this.value = null;
                scope.$apply();
            });
        }

    }
}