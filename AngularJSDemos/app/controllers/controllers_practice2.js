app.controller('CustomersController', function ($scope, customersService) {
	init();

	function init() {
		$scope.customers = customersService.getCustomers();
	}
})