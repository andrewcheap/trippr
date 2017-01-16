(function() {
	'use strict';
	/*jshint validthis: true */

	angular.module('trippr.favorites')
		.component('favorites', {
			controllerAs: 'favoritesCtrl',
			controller: favoritesController,
			templateUrl: 'app/components/favoritesComponent/favorites.template.html',
	});

	function favoritesController(favoritesService, $filter) {
	
		var self = this;

		self.sortBy = sortBy;
		
		self.userFavorites = favoritesService.getFavorites();

		  	// Use the Angular $filter to set orderBy to the orderBy filter
		  	var orderBy = $filter('orderBy');

		  	// sortBy function is called when the table head is clicked
			function sortBy(propertyName) {

			  // Set reverse boolean
			  // If  propertyName is passed and equals the property name last passed, then toggle the reverse value
			  self.reverse = (propertyName !== null && self.propertyName === propertyName) ? !self.reverse : false;
			  
			  self.propertyName = propertyName;

			  // One all the values are set, then call the orderBy filter.
			  self.userFavorites = orderBy(self.userFavorites, self.propertyName, self.reverse);
			}
	}
})();