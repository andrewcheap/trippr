(function() {
	'use strict';

	angular.module('trippr.results')
		.component('results', {
			templateUrl: 'app/components/resultsDirective/results.template.html',
			controller: resultsController,
			controllerAs: 'results',
			bindings: {
				flights: '='
			}
		})

		function resultsController() {
			var self = this;

			console.log("flights", self.flights);
		}
})();