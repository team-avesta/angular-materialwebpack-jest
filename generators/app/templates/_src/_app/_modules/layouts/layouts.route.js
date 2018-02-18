import controller from './layouts.controller'
import tpl from './layouts.html'
import oneColumnTpl from './html/1Column.html';

export default function(app) {

	app.config(routes);

	function routes($stateProvider) {
		'ngInject';

		$stateProvider
			.state('main.layouts', {
				url: '/layouts',
				templateUrl: tpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.1column', {
				url: '/1column',
				templateUrl: oneColumnTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.2column', {
				url: '/2column',
				templateUrl: oneColumnTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.3column', {
				url: '/3column',
				templateUrl: oneColumnTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.horcenter', {
				url: '/horcenter',
				templateUrl: oneColumnTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.vercenter', {
				url: '/vercenter',
				templateUrl: oneColumnTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			});
	}
}