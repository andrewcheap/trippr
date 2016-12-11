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
		});

		function resultsController($scope, $filter) {
			var self = this;

			self.sortBy = sortBy;

			self.totalItems = [];

			// Watch for when new collection of flights gets
			$scope.$watchCollection(function() {
				return self.flights;
			}, 
				function(newValue, oldValue) {
					if(newValue && newValue != oldValue) {
					  	self.totalItems = self.flights.length;
						self.currentPage = 1;
						self.itemsPerPage = 10;
					}
			});

			// Watch for a new page click
			$scope.$watch(function(){
				return self.currentPage;
			}, function(newValue, oldValue) {
				if(newValue !== oldValue) {
					setPagingData(self.currentPage);
				}
			});

		  // On each page click we splice the array and return that page worth of data
		  function setPagingData(page) {
		    var pagedData = self.flights.slice(
		      (page - 1) * self.itemsPerPage,
		      page * self.itemsPerPage
		    );
		    self.flightPage = pagedData;
		  }


		  	// Use the Angular $filter to set orderBy to the orderBy filter
		  	var orderBy = $filter('orderBy');

		  	// sortBy function is called when the table head is clicked
			function sortBy(propertyName) {

			  // Set reverse boolean
			  // If  propertyName is passed and equals the property name last passed, then toggle the reverse value
			  self.reverse = (propertyName !== null && self.propertyName === propertyName) ? !self.reverse : false;
			  
			  self.propertyName = propertyName;

			  // One all the values are set, then call the orderBy filter.
			  self.flights = orderBy(self.flights, self.propertyName, self.reverse);

			  // Reset the pagingation to the first page
			  setPagingData(1);

			};


		}
})();