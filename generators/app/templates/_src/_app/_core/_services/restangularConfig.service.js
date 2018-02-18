'use strict';

export default function(app) {
	app
		.factory('restangularConfigService', service)

	function service(Restangular, toastService, authService, pubSubService, pubSubEvents, $q, configUrl) {
		var isOffline = false;
		var service = {
			init: init,
			isOffline: isOffline,
			showErrorMessage: showErrorMessage
		};

		return service;

		//////////////////////

		function init() {
			Restangular.setBaseUrl(configUrl.serverUrl + '/api/');
			Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
				if (response.status === 401) {
					//handle auth error here
					return true;
				}

				pubSubService.publish(pubSubEvents.message._HIDE_LOADING_SPINNER_);

				var errorObj = { message: 'Something went wrong.' };
				if (response.status === -1) {
					service.showErrorMessage(errorObj);
				} else if (response.data && response.data.message) {
					service.showErrorMessage(response.data);
				} else {
					service.showErrorMessage(errorObj);
				}
				return true; // error not handled
			});

			Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
				pubSubService.publish(pubSubEvents.message._HIDE_LOADING_SPINNER_);
				if (data.message && !data.isDialog) {
					data.success ? toastService.successToast(data) : toastService.failureToast(data);
				}
				if (!data.success && data.isDialog) {
					return deferred.reject(data);
				} else if (!data.success) {
					return deferred.reject(data.message);
				}
				return deferred.resolve(data.data);
			});

			Restangular.addFullRequestInterceptor(function(element, operation, path, url, headers, params, httpConfig) {

				//uncomment if you use JWT tokens instead of cookies
				/*var x_auth_token = authService.getAuthToken();
				Restangular.setDefaultHeaders({ 'x-auth-token': x_auth_token });*/
				pubSubService.publish(pubSubEvents.message._SHOW_LOADING_SPINNER_);
				return httpConfig;
			});
		}

		function showErrorMessage(data) {
			pubSubService.publish(pubSubEvents.message._ADD_ERROR_MESSAGE_, [data]);
		}

	}
}