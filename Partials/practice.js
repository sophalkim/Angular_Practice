var demoApp = angular.module('demoApp', [])
	.factory('simpleFactory', function() {
		var factory = {};
		var customers = [];
		factory.getCustomers = function() {
			return customers;
		};
		return factory;
	})
	.controller('SimpleController', function ($scope, simpleFactory) {
		$scope.customers = simpleFactory.getCustomers();
	});