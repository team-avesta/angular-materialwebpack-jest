'use strict';

export default function(app) {
	app.run(runBlock);

	function runBlock($log, restangularConfigService, $transitions, errorService, toastService, $state, dialogService) {
		'ngInject';

		errorService.init();
		toastService.init();
		restangularConfigService.init();
		dialogService.init();

		// author - Chirag
		// created-on - 20-01-2018
		// It intercepts any transition to a state which requires authentication, when the
		// user is not currently authenticated, it redirects to the "login" state, which does not
		// require authentication.
		// This matches a transition coming from any state and going to any state that has
		// `requiresAuthentication` set to a truthy value.
		var match = {
			to: function(state) {
				return state.self !== null && state.self.requiresAuthentication === true;
			}
		}
		$transitions.onBefore(match, function(trans) {
			var authService = trans.injector().get('authService');

			// If the user is not authenticated
			var authToken = authService.getAuthToken();
			if (!authToken) {
				//redirect to a 'login' state which doesn't require auth.
				return $state.target('login');
			}
		});
	}
}