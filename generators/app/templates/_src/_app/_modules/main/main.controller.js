'use strict';

<% if (props.lodash) { %>
import _ from 'lodash/core';
<% } %>

<% if (props.moment) { %>
import moment from 'moment';
<% } %>

import angularLogo from '_images/angular.png';
import './sidenav/sidenav.html';
import './header/header.html';

export default function(app) {
	app.controller('MainController', MainController);

	function MainController($log) {
		'ngInject';
		//variables
		var vm = this;

		<% if (props.lodash) { %>
		vm.lodash_version = _.VERSION;
		<% } %>

		<% if (props.moment) { %>
		vm.moment_version = moment.version;
		<% } %>

		vm.angularLogo = angularLogo;
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