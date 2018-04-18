'use strict';

import mainTpl from './main.html';
import homeTpl from './home.html';

export default function(app) {
	app.config(routeConfig);

	function routeConfig($stateProvider) {
		'ngInject';

		$stateProvider
			.state('main', {
				url: '',
				abstract: true,
				templateUrl: mainTpl,
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.state('main.home', {
				url: '/home',
				templateUrl: homeTpl
			});
	}
}