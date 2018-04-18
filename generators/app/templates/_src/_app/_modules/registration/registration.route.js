'use strict';
import tpl from './registration.html'

export default function(app) {
	app.config(route);

	function route($stateProvider, stateConstantService) {
		'ngInject';
		$stateProvider
			.state(stateConstantService.REGISTRATION, {
				url: '/registration',
				templateUrl: tpl,
				params: {
					type: 'registration'
				},
				controller: 'registrationCtrl',
				controllerAs: 'vm'
			});
	}
}