'use strict';

export default function(app) {
	app.factory('MainService', MainService)

	function MainService($log, ajaxService) {
		'ngInject';
		var service = {
			testFunction: testFunction
		};

		return service;

		/**
		 * write function implementation below this line
		 */

		function testFunction() {
			return true;
		}
	}
};