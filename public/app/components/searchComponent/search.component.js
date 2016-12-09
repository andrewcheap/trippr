(function() {
	'use strict';

	angular.module('trippr.search')
		.component('search', {
			controllerAs: 'searchCtrl',
			controller: searchController,
			templateUrl: 'app/components/searchComponent/search.template.html',
	});

	function searchController($http, $filter, airportCodeService, calendarDateService, apiDataService) {
	
	var self = this;

	self.airportObj = {};
	self.dateObj = {};

	
	self.submitData = function() {
		// Get the airport object from the serivce
		self.airportObj = airportCodeService.getAirportObj();

		// Get the date object from the service
		self.dateObj = calendarDateService.getDates();

		// Set the date variables and format
		self.departureDate = $filter('date')(self.dateObj.departureDate, 'yyyy-MM-dd')
		self.returnDate = $filter('date')(self.dateObj.returnDate, 'yyyy-MM-dd')

		apiDataService.getFlightInfo(self.departureDate, self.returnDate, self.airportObj.code)
			.then(function(r){
				self.flightInfoObj = JSON.parse(r.info).FareInfo;
				// console.log(self.flightInfoObj);
			});

		};



	}
})();