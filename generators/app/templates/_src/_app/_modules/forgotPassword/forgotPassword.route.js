'use strict';
import tpl from './forgotPassword.html'

export default function(app) {
	app.config(route);

	function route($stateProvider, stateConstantService) {
		'ngInject';
		$stateProvider
			.state(stateConstantService.FORGOT_PASSWORD, {
				url: '/forgotpassword',
				templateUrl: tpl,
				controller: 'forgotPasswordCtrl',
				controllerAs: 'vm'
			});
	}
}