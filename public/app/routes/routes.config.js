(function() {
	'use strict';

	angular.module('trippr.routes')
		.config(['$routeProvider', configRoutes]);

		function configRoutes($routeProvider) {
			console.log("here");

			$routeProvider
				.when('/', {
					template: '<search></search>'
				})
				.when('/favorites', {
					template: '<favorites></favorites>'
				})
				.when('/search', {
					template: '<search></search>'
				})
				.otherwise({
					redirectTo: '/'
				});
		}

})();