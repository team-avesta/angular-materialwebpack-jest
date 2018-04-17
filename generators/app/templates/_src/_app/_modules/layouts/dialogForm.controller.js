'use strict';
import dialogFormTpl from './html/DialogForm.html';

export default function(app) {
	app.controller('dialogFormController', controller);

	function controller($mdDialog) {
		'ngInject';
		//variables
		var vm = this;
		//functions
		vm.onCancel = onCancel;
		vm.onSave = onSave;
		vm.onClose = onClose;

		/**
		 * write function implementation below this line
		 */

		function onClose() {
			$mdDialog.hide()
		}

		function onCancel() {
			$mdDialog.hide()
		}

		function onSave() {
			$mdDialog.hide()
		}
	}
}