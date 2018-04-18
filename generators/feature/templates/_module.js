// Import Style
import '<%= "./"+featureName+".scss" %>';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
// Import internal modules
import route from '<%= "./"+featureName+".route" %>';
import service from '<%= "./"+featureName+".service" %>';
import controller from '<%= "./"+featureName+".controller" %>';
<% if (includeConfig) { %>import config from '<%= "./"+featureName+".config" %>';<% } %>
<% if (includeRun) { %>import run from '<%= "./"+featureName+".run" %>';<% } %>
var module = angular.module("<%= featureName %>", [uiRouter]);

//route
route(module);

//services
service(module);

//controllers
controller(module);
<% if (includeConfig) { %>
//config block
config(module);
<% } %>
<% if (includeRun) { %>
//run block
run(module);
<% } %>
export default module;