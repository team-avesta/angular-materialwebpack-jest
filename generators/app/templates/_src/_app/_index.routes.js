'use strict';

/**
 * This file is used to register those routes that are to be loaded async at run time
 * using ocLazyLoad plugin. If the route you are going to load does not match that
 * criteria, don't register it here.
 */

<% if (props.ocLazyLoad) { %>
import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./modules/async-page-example/async.html';
<% } %>

function routeConfig($urlRouterProvider <% if (props.ocLazyLoad) { %>, $stateProvider, resolverProvider <% } %>) {
	'ngInject';

	<% if (props.ocLazyLoad) { %>
	$stateProvider
		.state('async', {
			url: '/async',
			templateUrl: asyncTemplate,
			controller: 'asyncCtrl',
			resolve: {
				asyncPreloading: resolverProvider.asyncPagePrealoading
			}
		});
	<% } %>

	$urlRouterProvider.otherwise('/home');

}

export default angular
	.module('index.routes', [])
	.config(routeConfig);