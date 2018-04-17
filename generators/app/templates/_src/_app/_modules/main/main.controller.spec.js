//import the main file which contains the entire angular app
import '../../index.bootstrap';
import angularLogo from '_images/angular.png';

describe('dashboard module test', function() {
	let ctrl;
	beforeEach(() => {
		//include the main module
		angular.mock.module('myNgApp');
		//obtain reference to controller object
		angular.mock.inject(($controller) => {
			ctrl = $controller('MainController');
		});
	});

	it('canary test', function() {
		expect(true).toBe(true);
	});

	it('calling testFunction should return true', function() {
		var value = ctrl.testFunction();
		expect(value).toBe(true);
	});


	it('angularLogo should contain angular.png file data', function() {
		expect(ctrl.angularLogo).toBe(angularLogo);
	});
});