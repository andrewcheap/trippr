(function() {
	'use strict';

	angular.module('trippr.airportSearch')
		.component('airportSearch', {
			templateUrl: 'app/components/airportSearchDirective/airportSearch.template.html',
			controller: airportSearchController,
			controllerAs: 'airportSearch'
		})

		function airportSearchController($q, $scope, airportCodeService) {
			var self = this;
			self.hasAirport = hasAirport;


			airportCodeService.getAirportCodes().then(function(r) {
				$scope.airports = r;
			});

			$scope.$watch('airport', function(){
				airportCodeService.setAirportObj($scope.airport);
			})

			// Check if the airport input has been completed
			self.airportSelected = false;
			function hasAirport() {
				console.log("airportSelected", self.airportSelected)
				if(typeof $scope.airport == 'object') {
					self.airportSelected = true;
				}
			}
		}
})();