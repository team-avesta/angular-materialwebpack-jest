'use strict';

export default function(app) {
	app.run(runBlock);

	function runBlock($log, restangularConfigService) {
		'ngInject';

		$log.debug('Hello from run block!');
		restangularConfigService.init();
	}
};