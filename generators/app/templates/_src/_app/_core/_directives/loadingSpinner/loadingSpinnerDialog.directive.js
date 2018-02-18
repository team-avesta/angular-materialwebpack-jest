'use strict';
import spinnerTpl from './loadingSpinner.html';

export default function(app) {
    app
        .directive('loadingSpinnerDialog', directive);

    function directive(pubSubService, pubSubEvents) {
        var directive = {
            link: link,
            templateUrl: spinnerTpl,
            restrict: 'E',
            replace: true,
            scope: {
                notloading: "="
            }
        };
        return directive;

        //////////////////

        function link(scope, element, attrs) {
            //console.log(scope.notloading)
            if (!scope.notloading) {
                element.addClass('hidden')
            }
            scope.showHandle = pubSubService.subscribe(pubSubEvents.message._SHOW_DIALOG_LOADING_SPINNER_, showRequestHandler);
            scope.hideHandle = pubSubService.subscribe(pubSubEvents.message._HIDE_DIALOG_LOADING_SPINNER_, hideRequestHandler);

            function showRequestHandler() {
                ////console.log('asdadsasdsa')
                element.removeClass('hidden');
            }

            function hideRequestHandler() {
                element.addClass('hidden');
            }

            scope.$on('$destroy', function() {
                pubSubService.unsubscribe(scope.showHandle);
                pubSubService.unsubscribe(scope.hideHandle);
            });
        }
    }
}