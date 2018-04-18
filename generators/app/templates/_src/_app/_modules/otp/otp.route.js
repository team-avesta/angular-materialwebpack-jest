'use strict';
import tpl from './otp.html'
import './otpForm.html'

export default function(app) {
	app.config(route);

	function route($stateProvider, stateConstantService) {
		'ngInject';
		$stateProvider
			.state(stateConstantService.OTP, {
				url: '/otp',
				templateUrl: tpl,
				controller: 'otpCtrl',
				controllerAs: 'vm'
			});
	}
}