var app = angular.module('customersApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/customers', 
			{
				controller: 'CustomersController',
				templateUrl: '/app/partials/customers.html'
			})
		.when('/customerorders/:customerID', 
			{
				controller: 'CustomerOrdersController',
				templateUrl: '/app/partials/customerOrders.html'
			})
		.when('/orders',
			{
				controller: 'OrdersController',
				templateUrl: '/app/partials/orders.html'
			})
		.otherwise({ redirectTo: '/customers'});
});