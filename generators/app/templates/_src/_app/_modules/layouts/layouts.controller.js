'use strict';
import dialogFormTpl from './html/DialogForm.html';

export default function(app) {
	app.controller('layoutsCtrl', controller);

	function controller($log, $mdDialog) {
		'ngInject';
		//variables
		var vm = this;
		vm.instructionFlag = false;
		vm.onBlockEmployee = onBlockEmployee;
		vm.currDate = new Date();
		vm.block_state = 'Block';
		vm.itemList = [
			{ "id": 1, "code": "1200", "name": "Plastic Bags" },
			{ "id": 2, "code": "1211", "name": "Note Books" },
			{ "id": 3, "code": "1222", "name": "Stapler Pins" }
		];
		vm.paymentType = [
			{ "id": 1, "name": "Advances" },
			{ "id": 2, "name": "Reimbursement" }
		];
		vm.project = [
			{ "id": 1, "code": "bhu001", "name": "Bhuvneshwar Board" },
			{ "id": 2, "code": "aas002", "name": "Aasam Board" },
			{ "id": 3, "code": "swas003", "name": "Swarnim Gujarat Sports University" },
		];
		vm.employeeList = [{
				code: '001',
				name: 'Yusuf Sharma'
			}, {
				code: '002',
				name: 'Vivek Satasiya'
			}, {
				code: '003',
				name: 'Yash Vekaria'
			},
			{
				code: '004',
				name: 'Naresh Tank'
			},
			{
				code: '005',
				name: 'Vinay Bhinde'
			}
		];
		vm.teamList = [{
				id: 1,
				code: '0001.001',
				name: 'Naresh Team'
			},
			{
				id: 2,
				code: '0002.001',
				name: 'Vivek Team'
			},
			{
				id: 3,
				code: '0003.001',
				name: 'Vinay Team'
			},
			{
				id: 4,
				code: '0003.002',
				name: 'Chirag Team'
			},
			{
				id: 5,
				code: '0003.003',
				name: 'Aakash Team'
			},
			{
				id: 6,
				code: '0004.001',
				name: 'Yash Team'
			},
			{
				id: 7,
				code: '0005.001',
				name: 'Rujul Team'
			},
			{
				id: 8,
				code: '0005.002',
				name: 'Aashish Team'
			},
			{
				id: 9,
				code: '0005.003',
				name: 'Rutu Team'
			},
			{
				id: 10,
				code: '0004.002',
				name: 'Gaurav Team'
			},
			{
				id: 1,
				code: '0001.001',
				name: 'Naresh Team'
			},
			{
				id: 2,
				code: '0002.001',
				name: 'Vivek Team'
			},
			{
				id: 3,
				code: '0003.001',
				name: 'Vinay Team'
			},
			{
				id: 4,
				code: '0003.002',
				name: 'Chirag Team'
			},
			{
				id: 5,
				code: '0003.003',
				name: 'Aakash Team'
			},
			{
				id: 6,
				code: '0004.001',
				name: 'Yash Team'
			},
			{
				id: 7,
				code: '0005.001',
				name: 'Rujul Team'
			},
			{
				id: 8,
				code: '0005.002',
				name: 'Aashish Team'
			},
			{
				id: 9,
				code: '0005.003',
				name: 'Rutu Team'
			},
			{
				id: 10,
				code: '0004.002',
				name: 'Gaurav Team'
			}
		];
		vm.isFilterOpen = false;
		vm.filterButtonText = '';
		//functions
		vm.testFunction = testFunction;
		vm.onClickOpenDialog = onClickOpenDialog;
		vm.onFilterBtn = onFilterBtn;
		vm.$onInit = init;
		vm.onInstruction = onInstruction;
		vm.onClose = onClose;
		vm.querySearchName = querySearchName;

		/**
		 * write function implementation below this line
		 */

		function testFunction() {
			return true;
		}

		function init() {
			vm.filterButtonText = 'VIEW FILTER';
		}

		function onClickOpenDialog(ev) {
			$mdDialog.show({
					controller: 'dialogFormCtrl',
					controllerAs: 'vm',
					templateUrl: dialogFormTpl,
					targetEvent: ev,
					clickOutsideToClose: true
				})
				.then(function(returnData) {
					console.log(returnData);
					if (returnData) {
						//vm.expense.push(returnData);
					}
				}, function() {
					console.log('here');
				});
		}

		function onFilterBtn() {
			vm.isFilterOpen = !vm.isFilterOpen;
			vm.filterButtonText = vm.isFilterOpen ? 'CLOSE FILTER' : 'VIEW FILTER';
		}

		function onInstruction() {
			vm.instructionFlag = true;
		}

		function onClose() {
			vm.instructionFlag = false;
		}

		function onBlockEmployee(block) {
			if (block) {
				vm.block_state = 'Unblock';
			} else {
				vm.block_state = 'Block';
			}
		}

		function querySearchName(query) {
			var results;
			results = query ? vm.employeeList.filter(createFilterForName(query)) : vm.employeeList;
			if (vm.simulateQuery) {
				return $q(function(resolve, reject) {
					$timeout(function() {
						resolve(results);
					}, Math.random() * 1000, false);
				})
			} else {
				return results;
			}
		}

		function createFilterForName(query) {
			var lowercaseQuery = angular.lowercase(query);
			return function filterFn(state) {
				return angular.lowercase(state.name).indexOf(query) === 0;
			};
		}
	}
}