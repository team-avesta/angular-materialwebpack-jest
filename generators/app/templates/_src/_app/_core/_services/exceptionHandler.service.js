'use strict';
export default function(app) {
    app
        .config(service);

    function service($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }

    function extendExceptionHandler($delegate) {
        return function(exception, cause) {
            $delegate(exception, cause);
            var errorData = {
                exception: exception,
                cause: cause
            };
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             */
            //console.log(errorData);
        };
    }
}