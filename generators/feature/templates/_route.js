import tpl from '<%= "./"+featureName+".html" %>'

export default function(app) {

	app.config(routes);

	function routes($stateProvider) {
		'ngInject';

		$stateProvider.state("main.<%= featureName %>", {
			url: "/<%=featureName%>",
			templateUrl: tpl,
			controller: '<%=featureName+"Ctrl"%>',
			controllerAs: "vm"
		});
	}
}