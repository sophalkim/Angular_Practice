app.controller('CustomersController', function ($scope, customersService) {
	init();

	function init() {
		$scope.customers = customersService.getCustomers();
	}

	$scope.insertCustomer = function() {
		var firstName = $scope.newCustomer.firstName;
		var lastName = #scope.newCustomer.lastName;
		var city = $scope.newCustomer.city;
		customersService.insertCustomer(firstName, lastName, city);
		$scope.newCustomer.firstName = '';
		$scope.newCustomer.lastName = '';
		$scope.newCustomer.city = '';
	};

	$scope.deleteCustomer = function (id) {
		customersService.deleteCustomer(id);
	};
});

app.controller('CustomerOrdersController', function ($scope, $routeParams, customersService) {
	$scope.customer = {};
	$scope.ordersTotal = 0.00;
	init();

	function init() {
		var customerID = ($routeParams.customerID) ? parseInt($routeParams.customersID) : 0;
		if (customerID > 0) {
			$scope.customer = customersService.getCustomer(customerID);
		}
	}
});

app.controller('OrdersController', function ($scope, customersService) {
	$scope.customers = [];
	init();

	function init() {
		$scope.customers = customersService.getCustomers();
	}
});