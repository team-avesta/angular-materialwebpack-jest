'use strict';

export default function(app) {
	app.factory('layoutsService', service)

	function service($log) {
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
}