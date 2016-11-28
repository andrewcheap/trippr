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

		function airportSearchController($http, $scope) {
			var self = this;


			$http({
				method: 'GET',
				url: '../assets/js/airports.json'
			}).then(function successCallback(response) {
					$scope.airports = response.data;
			}, function errorCallback(response) {
				console.log("failed to get data");
			});



		}
})();