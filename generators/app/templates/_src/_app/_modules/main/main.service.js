'use strict';

export default function(app) {
	app.factory('MainService', MainService)

	function MainService($log, ajaxService, dialogService, stateConstantService) {
		'ngInject';
		var unauthorized = false;
		var service = {
			testFunction: testFunction,
			unauthorized: unauthorized,
			redirectToLogin: redirectToLogin
		};

		return service;

		/**
		 * write function implementation below this line
		 */

		function testFunction() {
			return true;
		}

		function redirectToLogin() {
			if (service.unauthorized) {
				return;
			}
			service.unauthorized = true;
			dialogService.showPopupDialogWithPromise('Unauthorized', 'Your session has been expired. Please login to continue.').then(function() {
				$state.go(stateConstantService.LOGIN);
			});
		}
	}
};