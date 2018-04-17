import '../../index.bootstrap';

describe('main service test', function() {
	let service;
	beforeEach(() => {
		//include the main module
		angular.mock.module('myNgApp');
		//get reference to service object
		angular.mock.inject((MainService) => {
			service = MainService;
		});
	});

	it('canary test', function() {
		expect(true).toBe(true);
	});

	it('calling testFunction should return true', function() {
		var value = service.testFunction();
		expect(value).toBe(true);
	});
});