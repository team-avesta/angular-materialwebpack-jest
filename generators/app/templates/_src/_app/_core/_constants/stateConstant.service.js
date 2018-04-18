'use strict';
export default function(app) {
	const states = {
		LOGIN: 'login',
		REGISTRATION: 'registration',
		RESET_PASSWORD: 'reset_password',
		FORGOT_PASSWORD: 'forgot_password',
		MAIN: 'main',
		MAIN_HOME: 'main.home',
		OTP: 'otp'
	};
	app.constant('stateConstantService', states);
}