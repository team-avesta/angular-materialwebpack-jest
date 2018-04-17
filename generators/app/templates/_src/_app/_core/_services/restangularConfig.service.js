'use strict';

export default function(app) {
	app
		.factory('restangularConfigService', service)

	function service(Restangular, toastService, authService, pubSubService, eventsConstantService, $q, urlConstantService, MainService) {
		var isOffline = false;
		var service = {
			init: init,
			isOffline: isOffline,
			showErrorMessage: showErrorMessage
		};

		return service;

		//////////////////////

		function init() {
			Restangular.setBaseUrl(urlConstantService.apiEndpoint + '/api/');
			Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
				//in case of any 401 error code redirect to login page
				if (response.status === 401 || response.status === 403) {
					dashboardService.redirectToLogin();
					return true;
				}

				pubSubService.publish(eventsConstantService.message._HIDE_LOADING_SPINNER_);
				pubSubService.publish(eventsConstantService.message._HIDE_DIALOG_LOADING_SPINNER_);

				var errorObj = { message: 'Something went wrong.' };
				if (response.status === -1) {
					service.showErrorMessage(errorObj);
				} else if (response.data && response.data.message) {
					service.showErrorMessage(response.data);
				} else {
					service.showErrorMessage(errorObj);
				}
				return deferred.reject('Something went wrong. Please try again.');
			});

			Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
				pubSubService.publish(eventsConstantService.message._HIDE_LOADING_SPINNER_);
				pubSubService.publish(eventsConstantService.message._HIDE_DIALOG_LOADING_SPINNER_);

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
				pubSubService.publish(eventsConstantService.message._SHOW_LOADING_SPINNER_);
				pubSubService.publish(eventsConstantService.message._SHOW_DIALOG_LOADING_SPINNER_);
				return httpConfig;
			});
		}

		function showErrorMessage(data) {
			pubSubService.publish(eventsConstantService.message._ADD_ERROR_MESSAGE_, [data]);
		}

	}
}