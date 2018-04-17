'use strict';
export default function(app) {
	const states = {
		LOGIN: 'login',
		RESET_PASSWORD: 'reset_password',
		FORGOT_PASSWORD: 'forgot_password',
		MAIN: 'main',
		MAIN_HOME: 'main.home'
	};
	app.constant('stateConstantService', states);
}