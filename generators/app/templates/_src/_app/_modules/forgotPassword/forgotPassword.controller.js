'use strict';

export default function(app) {
	app.controller('forgotPasswordCtrl', controller);

	function controller($state, stateConstantService) {
		'ngInject';
		var vm = this;

		//variables
		vm.onDone = onDone
		vm.onResetPassword = onResetPassword
		//core

		//helpers

		////////////
		///start writing function implementations below

		function onDone() {
			$state.go(stateConstantService.LOGIN);
		}

		function onResetPassword() {
			$state.go(stateConstantService.LOGIN);
		}
	}

}