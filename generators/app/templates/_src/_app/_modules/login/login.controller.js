'use strict';

export default function(app) {

	app.controller('loginCtrl', controller);

	function controller($state, stateConstantService) {
		'ngInject';
		//variables
		var vm = this;
		//core
		vm.onClickRegisterBtn = onClickRegisterBtn;
		vm.onClickLoginBtn = onClickLoginBtn;
		vm.onForgotPassword = onForgotPassword;

		////////////
		///start writing function implementations below

		function onClickRegisterBtn() {
			$state.go(stateConstantService.REGISTRATION);
		}

		function onClickLoginBtn() {
			$state.go(stateConstantService.OTP);
		}

		function onForgotPassword() {
			$state.go(stateConstantService.FORGOT_PASSWORD);
		}
	}
}