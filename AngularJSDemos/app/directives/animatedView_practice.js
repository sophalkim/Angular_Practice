app.directive('animatedView', ['$route', '$anchorScroll', '$compile', '$controller', function ($route, $anchorScroll, $compile, $controller) {
	return {
		restrict: 'ECA',
		terminal: true,
		link: function (scope, element, attr) {
			var lastScope
		}
	}
}]);