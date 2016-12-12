(function() {
	'use strict';

	angular.module('trippr.search')
		.component('search', {
			controllerAs: 'searchCtrl',
			controller: searchController,
			templateUrl: 'app/components/searchComponent/search.template.html',
	});

	function searchController($http, $filter, airportCodeService, calendarDateService, apiDataService, $uibModal) {
	
	var self = this;

	self.openModal = openModal;

	self.airportObj = {};
	self.dateObj = {};
	self.filterPrices = filterPrices;
	self.hasData = true;
	self.isValid = false;
	
	self.submitData = function() {
		// Get the airport object from the serivce
		self.airportObj = airportCodeService.getAirportObj();

		// Get the date object from the service
		self.dateObj = calendarDateService.getDates();

		// Set the date variables and format
		self.departureDate = $filter('date')(self.dateObj.departureDate, 'yyyy-MM-dd')
		self.returnDate = $filter('date')(self.dateObj.returnDate, 'yyyy-MM-dd')

		// Calls the Promise function and handle response
		apiDataService.getFlightInfo(self.departureDate, self.returnDate, self.airportObj.code)
			.then(function(r){
				self.flightInfoObj = filterPrices(JSON.parse(r.info).FareInfo);
			},
			function(error) {
					// If no data returned, open error modal
					self.openModal();
                	console.log(error);
    			});
		};

		// Filter out the flights that returned without prices
		function filterPrices(arr) {
			var filtered = [];
				for (var i = 0; i < arr.length; i++) {
					var item = arr[i];
					if(!(isNaN(item.LowestFare))) {
						filtered.push(item);
					}
				}
			return filtered;
		}

		// Error modal
		function openModal() {
			var modalInstance = $uibModal.open({
					animation: self.animationsEnabled,
					component: 'modal',
			});
		}

	}
})();