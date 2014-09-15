app.service('customerService', function() {
	this.getCustomers = function() {
		return customers;
	};

	this.insertCustomer = function (firstName, lastName, city) {
		var topID = customers.length + 1;
		customers.push({
			id: topID,
			firstName: firstName,
			lastName: lastName,
			city: city
		});
	};

	this.deleteCustomer = function (id) {
		for (var i = customers.length - 1; i >= 0; i--) {
			if (customers[i].id === id) {
				customers.splice(i, 1);
				break;
			}
		}
	};
});