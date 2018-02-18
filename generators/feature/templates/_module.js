// Import Style
import '<%= "./"+featureName+".scss" %>';


import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// Import internal modules
import route from '<%= "./"+featureName+".route" %>';
import service from '<%= "./"+featureName+".service" %>';
import controller from '<%= "./"+featureName+".controller" %>';
import config from '<%= "./"+featureName+".config" %>';
import run from '<%= "./"+featureName+".run" %>';

var module = angular.module("<%= featureName %>", [uiRouter]);

//route
route(module);

//services
service(module);

//controllers
controller(module);

//config block
config(module);

//run block
run(module);

export default module;