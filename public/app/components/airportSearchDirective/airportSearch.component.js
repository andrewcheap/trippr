(function() {
	'use strict';

	angular.module('trippr.airportSearch')
		.component('airportSearch', {
			templateUrl: 'app/components/airportSearchDirective/airportSearch.template.html',
			controller: airportSearchController,
			controllerAs: 'airportSearch',
			bindings: {
					valid: "="
				}
		})

		function airportSearchController($q, $scope, airportCodeService) {
			var self = this;

			// Calls the Promise function and handle response
			airportCodeService.getAirportCodes().then(function(r) {
				$scope.airports = r;
			}, function(error) {
				console.log(error);
			});

			// When input changes, set the airport object in the service
			$scope.$watch('airport', function(newValue, oldValue){
				if(newValue !== oldValue) {
					airportCodeService.setAirportObj($scope.airport);

					// Validate that the airport input is not empty
					self.valid  = ($scope.airport !== null && $scope.airport !== "");
				}
				
			})
		}
})();