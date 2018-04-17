import controller from './layouts.controller'
import tpl from './layouts.html'
import twoColumnTpl from './html/2Column.html';
import dialogTpl from './html/Dialog.html';
import gridTpl from './html/Grid.html';
import formTpl from './html/Form.html';
import reportTpl from './html/Report.html';

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
			}).state('main.layouts.2column', {
				url: '/2column',
				templateUrl: twoColumnTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.dialog', {
				url: '/dialog',
				templateUrl: dialogTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.grid', {
				url: '/grid',
				templateUrl: gridTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.form', {
				url: '/form',
				templateUrl: formTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			}).state('main.layouts.report', {
				url: '/report',
				templateUrl: reportTpl,
				controller: 'layoutsController',
				controllerAs: 'vm'
			});
	}
}