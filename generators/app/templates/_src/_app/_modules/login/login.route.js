//'use strict';
import tpl from './login.html'

export default function(app) {
	app.config(route);

	function route($stateProvider, stateConstantService) {
		'ngInject';
		$stateProvider
			.state(stateConstantService.LOGIN, {
				url: '/login',
				templateUrl: tpl,
				controller: 'loginCtrl',
				controllerAs: 'vm'
			});
	}
}