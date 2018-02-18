'use strict';

export default function(app) {
	app.config(config);

	function config($logProvider, $compileProvider, $mdAriaProvider, $mdThemingProvider) {
		'ngInject';

		// Globally disables all ARIA warnings.
		$mdAriaProvider.disableWarnings();

		$mdThemingProvider.theme('default')
			.primaryPalette('cyan', {
				'default': '800',
			})
			.accentPalette('red', {
				'default': 'A200',
			});

		$logProvider.debugEnabled(true);

		//following angular's recommendation when going to production
		//https://docs.angularjs.org/guide/production
		if (process.env.NODE_ENV === 'production') {
			$logProvider.debugEnabled(false);
			$compileProvider.debugInfoEnabled(false);
		}
	}
};