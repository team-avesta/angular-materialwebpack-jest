'use strict';

import './async.scss';

import asyncController from './async.controller.js';

const asyncModule = angular.module('async-module', []);

asyncModule.controller('asyncCtrl', asyncController);

export default asyncModule;