'use strict';

export default function(app) {

	app.controller('registrationCtrl', controller);

	function controller($state, stateConstantService) {
		'ngInject';
		var vm = this;

		vm.createPasswordSuccess = createPasswordSuccess;
		vm.onCancel = onCancel;

		function createPasswordSuccess() {
			$state.go(stateConstantService.LOGIN);
		}

		function onCancel() {
			$state.go(stateConstantService.LOGIN);
		}
	}
}