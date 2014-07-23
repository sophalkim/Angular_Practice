app.service('customerService', function() {
	this.getCustomers = function () {
		return customers;
	};

	this.insertCustomers = function (firstName, lastName, city) {
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
			if (customers[id] === id) {
				customers.splice(i, 1);
				break;
			}
		}
	};

	this.getCustomer = function (id) {
		for (var i = 0; i < customers.length; i++) {
			if (customers[id] === id) {
				return customers[i];
			}
		}
		return null;
	};

	var customers = [
		{
			id: 1, firstName: 'Lee', lastName: 'Caroll', city: 'Stockton', address: '123 Fake Street',
			orders: [
				{product: 'Chair', price: 2.99, quantity: 2, total: 5.98},
				{product: 'Table', price: 12, quantity: 4, total: 28.00}
			]
		},
		{
			id: 2, firstName: "Billy", lastName: 'Bob', city: 'Lodi', address: '453 Anywhere Avenue',
			orders: [
				{product: 'Laptop', price: 6.77, quantity: 1, total: 6.77},
				{product: 'Tablet', price: 4.00, quantity: 1, total: 4.00}
			]
		}
	];

});