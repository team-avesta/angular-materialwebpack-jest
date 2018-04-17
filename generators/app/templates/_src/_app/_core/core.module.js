'use strict';

const shared = angular.module('core.shared', []);

//directives
import validationTestDirective from './directives/validation-test/validation-test.directive';
import focusMe from './directives/focusMe/focusMe.directive';
import loadingSpinner from './directives/loadingSpinner/loadingSpinner.directive';
import loadingSpinnerDialog from './directives/loadingSpinner/loadingSpinnerDialog.directive';
import policiesDirective from './directives/policies/policies.directive';
import inputLimitDirective from './directives/inputLimit/inputLimit.directive';
import fileInputDirective from './directives/fileInput/fileInput.directive';

validationTestDirective(shared);
focusMe(shared);
loadingSpinner(shared);
loadingSpinnerDialog(shared);
policiesDirective(shared);
inputLimitDirective(shared);
fileInputDirective(shared);

//services
import toastService from './services/toast.service';
import resolverProvider from './services/resolver.provider';
import ajaxService from './services/ajax.service';
import authService from './services/auth.service';
import dateConvertService from './services/dateConvert.service';
import dialogService from './services/dialog.service';
import errorService from './services/error.service';
import exceptionHandlerService from './services/exceptionHandler.service';
import fileReaderService from './services/fileReader.service';
import modelTransformerService from './services/modelTransformer.service';
import pubSubService from './services/pubSub.service';
import restangularConfigService from './services/restangularConfig.service';
import schemaValidationService from './services/schemaValidate.service';
import arrayService from './services/array.service';

toastService(shared);
resolverProvider(shared);
ajaxService(shared);
authService(shared);
dateConvertService(shared);
dialogService(shared);
errorService(shared);
exceptionHandlerService(shared);
fileReaderService(shared);
modelTransformerService(shared);
pubSubService(shared);
restangularConfigService(shared);
schemaValidationService(shared);
arrayService(shared);

//constants
import urlConstantService from './constants/urlConstant.service.js';
import eventConstantService from './constants/eventsConstant.service.js';
import stateConstantService from './constants/stateConstant.service.js';

urlConstantService(shared);
eventConstantService(shared);
stateConstantService(shared);

export default shared;