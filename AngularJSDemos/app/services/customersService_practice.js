app.service('customersService', function() {
	this.getCustomers = function () {
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

	this.getCustomer = function (id) {
		for (var i = 0; i < customers.length; i++) {
			if (customers[i].id === id) {
				return customers[i];
			}
		}
		return null;
	};

	var customers = [
		{
			id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix',
			orders: [
				{ product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99},
				{ product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96},
				{ product: 'Needles', price: 5.99, quantity: 1, orderTotal: 5.99}
			]
		},
		
	]
})