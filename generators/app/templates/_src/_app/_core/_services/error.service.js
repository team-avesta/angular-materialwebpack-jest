'use strict';
export default function(app) {
    app
        .factory('errorService', service);

    function service(pubSubService, eventsConstantService, $rootScope, toastService, $timeout) {
        var errorMessages = {};

        var errors = {
            init: init,
            addErrorMessageHandler: addErrorMessageHandler,
            logExceptionToConsole: logExceptionToConsole,
            logErrorToConsole: logErrorToConsole
        };

        return errors;

        ////////////////

        function logExceptionToConsole(err) {
            $timeout(function() {
                throw new Error(err && err.stack ? err.stack : 'Error!!')
            }, 0);
        }

        function logErrorToConsole(err) {
            $timeout(function() {
                throw new Error()
            }, 0);
        }

        function init() {
            errorMessages = {};
            pubSubService.subscribe(eventsConstantService.message._ADD_ERROR_MESSAGE_, errors.addErrorMessageHandler);
        }

        function addErrorMessageHandler(data) {
            if (!errorMessages) {
                errorMessages = {};
            }

            errorMessages = data.message;
            var type = data.isDialog ? 'dialog' : 'toast';
            var status = data.status;
            if (status === 401) {
                $rootScope.$broadcast('unauthorized');
            }

            switch (type) {
                case 'toast':
                    {
                        toastService.failureToast({
                            message: errorMessages
                        });
                        break;
                    }
                case 'dialog':
                    {
                        pubSubService.publish(eventsConstantService.message._DISPLAY_DIALOG_, [{
                            title: 'Error',
                            msg: errorMessages,
                            type: 'popup'
                        }]);
                        break;
                    }
                default:
                    {
                        toastService.failureToast({
                            message: errorMessages
                        });
                        break;
                    }
            }
        }
    }
}