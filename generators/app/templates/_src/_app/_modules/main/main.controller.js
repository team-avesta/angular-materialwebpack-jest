'use strict';

import angularLogo from '_images/angular.png';
import './sidenav/sidenav.html';
import './header/header.html';
import './notification.html';

export default function(app) {
	app.controller('MainController', MainController);

	function MainController($log) {
		'ngInject';
		//variables
		var vm = this;
		vm.notification = [{
				id: 1,
				priority_type: 1,
				statement: 'Subject Assessment of Chemistry subject is pending.',
				publish_at: '4 hours ago'
			},
			{
				id: 2,
				priority_type: 2,
				statement: 'QP Management of Physics subject is completed.',
				publish_at: 'Yesterday at 4.54pm'
			}, {
				id: 3,
				priority_type: 1,
				statement: 'Subject Assessment of Physics subject is on hold.',
				publish_at: 'August 6 at 1.52pm'
			}, {
				id: 4,
				priority_type: 2,
				statement: 'Paper Assessment of Maths-II subject will be start from 16/08/2017',
				publish_at: 'July 28 at 10.16am'
			}
		];
		vm.angularLogo = angularLogo;
		//functions
		vm.testFunction = testFunction;
		/**
		 * write function implementation below this line
		 */

		function testFunction() {
			return true;
		}
	}
}