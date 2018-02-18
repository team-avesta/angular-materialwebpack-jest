'use strict';

import route from './main.route';
import mainService from './main.service';
import mainController from './main.controller';
import sidenavController from './sidenav/sidenav.controller';

const mainPageModule = angular.module('main', [
	'ui.router'
]);

//route
route(mainPageModule);

//services
mainService(mainPageModule);

//controllers
mainController(mainPageModule);
sidenavController(mainPageModule);

export default mainPageModule;