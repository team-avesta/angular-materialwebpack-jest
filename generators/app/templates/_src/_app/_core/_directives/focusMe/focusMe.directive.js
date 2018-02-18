'use strict';

export default function(app) {
    app
        .directive('focusMe', directive);

    function directive() {
        return {
            link: function(scope, elem, attrs, ngModel) {
                elem[0].focus();
            }
        };
    }
}