'use strict';

export default function(app) {

	app.controller('otpCtrl', controller);

	function controller($state, stateConstantService) {
		'ngInject';
		var vm = this;
		//variables
		//core
		vm.onVerifyOTP = onVerifyOTP;

		///start writing function implementations below

		function onVerifyOTP() {
			$state.go(stateConstantService.HOME);
		}
	}

}