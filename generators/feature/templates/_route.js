import controller from '<%= "./"+featureName+".controller" %>'
import tpl from '<%= "./"+featureName+".html" %>'

export default function(app) {

	app.config(routes);

	function routes($stateProvider) {
		'ngInject';

		$stateProvider.state("<%= featureName %>", {
			url: "<%=" / "+featureName %>",
			templateUrl: tpl,
			controller: controller,
			controllerAs: "vm"
		});
	}
}