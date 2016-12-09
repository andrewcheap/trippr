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

		function resultsController($scope) {
			var self = this;

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

			$scope.$watch(function(){
				return self.currentPage;
			}, function(newValue, oldValue) {
				if(newValue !== oldValue) {
					setPagingData(self.currentPage);
				}
			});

		  function setPagingData(page) {
		    var pagedData = self.flights.slice(
		      (page - 1) * self.itemsPerPage,
		      page * self.itemsPerPage
		    );
		    self.flightPage = pagedData;
		  }
		}


})();