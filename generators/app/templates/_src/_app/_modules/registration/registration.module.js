'use strict';

import route from './registration.route';
import service from './registration.service';
import controller from './registration.controller';

const module = angular.module('registration', ['ui.router']);

//route
route(module);

//services
service(module);

//controllers
controller(module);

export default module;