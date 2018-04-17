'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './modules/main/main.module';
import layoutsModule from './modules/layouts/layouts.module';
import loginModule from './modules/login/login.module';

const App = angular.module(
	"<%= props.appName %>", [
		// plugins
		uiRouter,
		<%- modulesDependencies %>,

		"vAccordion",
		"validation",
		"validation.schema",
		"validation.rule",
		"md.data.table",
		// core
		coreModule.name,

		// components
		indexComponents.name,

		// routes
		indexRoutes.name,

		// pages
		mainModule.name,
		layoutsModule.name,
		loginModule.name
	]
);

//config block
config(App);

//run block
run(App);

export default App;