app.directive('animatedView', ['$route', '$anchorScroll', '$compile', '$controller', function ($route, $anchorScroll, $compile, $controller) {
	return {
		restrict: 'ECA',
		terminal: true,
		link: function (scope, element, attr) {
			var lastScope,
				onloadExp = attr.onload || '',
				defaults = { duration: 500, viewEnterAnimation: 'slideLeft', viewExitAnimation: 'fadeOut', slideAmount: 50, disabled: false}, 
				locals, 
				template,
				options = scope.$eval(attr.animations);

			angular.extend(defaults, options);

			scope.$on('$routeChangeSuccess', update);
			update();

			function destroyLastScope() {
				if (lastScope) {
					lastScope.$destroy();
					lastScope = null;
				}
			}

			function clearContent() {
				element.html('');
				destroyLastScope();
			}

			function update() {
				locals = $route.current && $route.current.locals;
				template = locals && locals.$template;

				if (template) {
					if (!defaults.disabled) {
						if (element.children().length > 0) {
							animate(defaults.viewExitAnimation);
						} else {
							animateEnterView(defaults.viewEnterAnimation);
						}
					} else {
						bindElement();
					}
				} else {
					clearContent();
				}
			}
		}
	}
}]);