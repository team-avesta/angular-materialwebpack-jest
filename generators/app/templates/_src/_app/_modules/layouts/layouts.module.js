// Import Style
import './layouts.scss';


import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// Import internal modules
import route from './layouts.route';
import service from './layouts.service';
import controller from './layouts.controller';
import dialogFormController from './dialogForm.controller';

var module = angular.module("layouts", [uiRouter]);

//route
route(module);

//services
service(module);

//controllers
controller(module);
dialogFormController(module);

export default module;