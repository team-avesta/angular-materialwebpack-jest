'use strict';

/**
 * All vendor modules are to be required in this file
 */

// node_modules
import "angular";
import "@uirouter/angularjs";
import "v-accordion";
import "angular-material-data-table";
<% for(var i=0; i<importList.length; i++) { %>
import "<%= importList[i] %>";
<% } %>
// local scripts
//form validation plugins
import '_scripts/form_validation/angular-validation-schema.js';
import '_scripts/form_validation/angular-validation.js';
import '_scripts/form_validation/validation.module.js';

// local css
import '../../node_modules/v-accordion/dist/v-accordion.min.css';
import '../../node_modules/angular-material/angular-material.min.css';
import '../../node_modules/angular-material-data-table/dist/md-data-table.min.css';