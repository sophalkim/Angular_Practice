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
				{ product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
				{ product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
				{ product: 'Needles', price: 5.99, quantity: 1, orderTotal: 5.99 }
			]
		},
		{
			id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Atlanta',
			orders: [
				{ product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
				{ product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
				{ product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.96 }

			]
		},
		{
			id: 3, firstName: 'Charles', lastName: 'Sutton', address: '455 7th Ave.', city: 'Quebec',
			orders: [
				{ product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
				{ product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
				{ product: "Gear of War", price: 49.99, quantity: 1, orderTotal: 49.99 },
				{ product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
			]
		},
		{
			id: 4, firstName: 'Albert', lastName: 'Einstein', address: '8966 N. Crescent Dr.', city: 'New York City', 
			orders: [
				{ product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95},
				{ product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99}
			]
		},
		{
			id: 5, firstName: 'Sonya', lastName: 'Williams', address: '55 S. Hollywood Blvd', city: 'Los Angeles'
		},
		{
			id: 6, firstName: 'Billy', lastName: 'Bob', address: '123 Fake Street', city: 'Stockton',
			orders: [
				{ product: 'Master of Magic', price: 19.99, quantity: 1, orderTotal: 19.99 },

			]
		}
	]
})