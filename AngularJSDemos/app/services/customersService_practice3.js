app.service('customerService', function() {
	this.getCustomers = function() {
		return customers;
	};
});