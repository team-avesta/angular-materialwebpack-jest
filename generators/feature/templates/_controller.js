export default function(app) {
	app.controller('<%=featureName+"Ctrl"%>', controller);

	function controller($log) {
		'ngInject';
		//variables
		var vm = this;
		//functions
		vm.testFunction = testFunction;

		/**
		 * write function implementation below this line
		 */

		function testFunction() {
			return true;
		}
	}
}