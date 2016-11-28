(function() {
	'use strict';

	angular.module('trippr.search')
		.component('searchBar', {
			controllerAs: 'searchCtrl',
			templateUrl: 'app/components/searchComponent/search.template.html',
			controller: searchController,
			bindings: {
				dates: "="
			}
	});

	function searchController($http) {
	


  (function getCityInformation() {
    var cities = [];
    $http.get('/api/v1/places?origin=BOS&departuredate=2016-12-15&returndate=2016-12-25')
    	.success(function(data) {
      console.log(data);
    })
    .error(function(err) {
		console.log(err);
    });
  })();



	}
})();