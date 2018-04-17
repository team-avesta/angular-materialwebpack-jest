//'use strict';

import route from './login.route';
import service from './login.service';
import controller from './login.controller';
import style from './style.scss';

const module = angular.module('login', ['ui.router']);

//route
route(module);

//services
service(module);

//controllers
controller(module);

export default module;