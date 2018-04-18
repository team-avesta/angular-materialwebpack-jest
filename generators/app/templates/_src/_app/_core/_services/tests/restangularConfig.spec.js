'use strict';
import '_appRoot/index.bootstrap';

describe('restangular Service rules test', function() {
	var _Restangular = null,
		_errorInterceptor = null,
		_toastService = null,
		_responseInterceptor = null,
		_requestInterceptors = null,
		_restangularConfigService,
		_pubSubService,
		_eventsConstantService,
		q = null,
		sandbox = null;

	beforeEach(function() {
		angular.mock.module("myNgApp");

		angular.mock.inject((restangularConfigService, Restangular, toastService, pubSubService, $q, eventsConstantService) => {
			_restangularConfigService = restangularConfigService
			_eventsConstantService = eventsConstantService;
			_Restangular = Restangular;
			_toastService = toastService;
			_pubSubService = pubSubService;
			q = $q;
			_errorInterceptor = _Restangular.configuration.errorInterceptors[0];
			_requestInterceptors = _Restangular.configuration.fullRequestInterceptor;
			_responseInterceptor = _Restangular.configuration.responseInterceptors[0];
		})
	});

	it('canary test', function() {
		expect(true).toBe(true);
	});

	it('addResponseInterceptor should registered to Restangular', function() {
		expect(typeof _responseInterceptor).toBe('function');
	});


	it('addResponseInterceptor should call toastService.successToast if data.message is there and data.success is true', function() {
		_toastService.successToast = jest.fn();
		var deferred = q.defer();
		var data = {
			success: true,
			message: 'success message'
		}
		_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
		expect(_toastService.successToast).toHaveBeenCalledTimes(1);
	});

	it('addResponseInterceptor should call toastService.failureToast if data.message is there and data.success is false', function() {
		_toastService.failureToast = jest.fn();
		var deferred = q.defer();
		var data = {
			success: false,
			message: 'failure message'
		}
		_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
		expect(_toastService.failureToast).toHaveBeenCalledTimes(1);
	});

	it('addResponseInterceptor should call deferred.reject if data.success is false', function() {
		var deferred = q.defer();
		deferred.reject = jest.fn();
		var data = {
			success: false,
			message: 'failure message'
		}
		_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
		expect(deferred.reject).toHaveBeenCalledTimes(1);
	});

	it('addResponseInterceptor should not call deferred.reject if data.success is true', function() {
		var deferred = q.defer();
		deferred.reject = jest.fn();
		var data = {
			success: true,
			message: 'success message'
		}
		_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
		expect(deferred.reject).toHaveBeenCalledTimes(0);
	});

	it('addResponseInterceptor should call deferred.reject with data.message if data.success is false', function() {
		var deferred = q.defer();
		deferred.reject = jest.fn();
		var data = {
			success: false,
			message: 'failure message'
		}
		_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
		expect(deferred.reject).toHaveBeenCalledTimes(1);
		expect(deferred.reject).toHaveBeenCalledWith('failure message');
	});

	/*it('addResponseInterceptor should return promise if success is true', function() {
		var data = {
			success: true,
			message: 'success message'
		}
		var deferred = q.defer();
		var result = _responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
		console.log("result", result);
		var type = typeof result.then;
		expect(type).toBe('function');
	});*/

	it('setErrorInterceptor should call showErrorMessage with correct params if called without params', function() {
		var errorObj = { message: 'Something went wrong.' };

		_restangularConfigService.showErrorMessage = jest.fn();

		_pubSubService.publish = jest.fn(function() {
			return null;
		});

		_errorInterceptor({});

		expect(_restangularConfigService.showErrorMessage).toHaveBeenCalledTimes(1);
		expect(_restangularConfigService.showErrorMessage).toHaveBeenCalledWith(errorObj);
	});

	it('setErrorInterceptor should call showErrorMessage with correct params if called with status -1', function() {
		var errorObj = { message: 'Something went wrong.' };
		_restangularConfigService.showErrorMessage = jest.fn();
		_pubSubService.publish = jest.fn(function() {
			return null;
		});
		_errorInterceptor({ status: -1 });
		expect(_restangularConfigService.showErrorMessage).toHaveBeenCalledTimes(1);
		expect(_restangularConfigService.showErrorMessage).toHaveBeenCalledWith(errorObj);
	});

	it('setErrorInterceptor should return true with watever params it calls', function() {
		_pubSubService.publish = jest.fn(function() {
			return null;
		});
		_restangularConfigService.showErrorMessage = jest.fn(function() {
			return null;
		});
		var result = _errorInterceptor({});
		expect(result).toBe(true);
	});

	it('setErrorInterceptor should not call pubSubService.publish if response.status===401', function() {
		_pubSubService.publish = jest.fn();
		_errorInterceptor({ status: 401 });
		expect(_pubSubService.publish).not.toHaveBeenCalled();
	});

	it('setErrorInterceptor should return true if service.isOffline variable is true', function() {
		_Restangular.isOffline = true;
		var value = _errorInterceptor({ status: 200 });
		expect(value).toBe(true);
	});

	it('showErrorMessage should publish _ADD_ERROR_MESSAGE_ when called', function() {
		var data = 'test';
		_pubSubService.publish = jest.fn();
		_restangularConfigService.showErrorMessage(data);
		expect(_pubSubService.publish).toHaveBeenCalledTimes(1);
		expect(_pubSubService.publish).toHaveBeenCalledWith(_eventsConstantService.message._ADD_ERROR_MESSAGE_, [data]);
	});
});