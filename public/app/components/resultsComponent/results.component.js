(function() {
	'use strict';

	angular.module('trippr.results')
		.component('resultsTable', {
			controllerAs: 'resultsCtrl',
			templateUrl: 'app/components/resultsComponent/results.template.html',
			controller: resultsController,
			bindings: {}
		})

		function resultsController() {
			
		}
})();