(function() {
	'use strict';

	angular.module('trippr.airportSearch')
		.component('airportSearch', {
			templateUrl: 'app/components/airportSearchDirective/airportSearch.template.html',
			controller: airportSearchController,
			controllerAs: 'airportSearch',
			bindings: {
			}
		})

		function airportSearchController() {
			var self = this;

			console.log("hello");


		}
})();