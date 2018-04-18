'use strict';

import route from './otp.route';
import service from './otp.service';
import controller from './otp.controller';

const module = angular.module('otp', ['ui.router']);

//route
route(module);

//services
service(module);

//controllers
controller(module);

export default module;