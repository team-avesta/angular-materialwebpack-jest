'use strict';

import route from './forgotPassword.route';
import service from './forgotPassword.service';
import controller from './forgotPassword.controller';
//import style from './style.scss';

const module = angular.module('forgotPassword', ['ui.router']);

//route
route(module);

//services
service(module);

//controllers
controller(module);

export default module;