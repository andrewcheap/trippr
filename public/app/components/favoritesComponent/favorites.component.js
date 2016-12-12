(function() {
	'use strict';

	angular.module('trippr.favorites')
		.component('favorites', {
			controllerAs: 'favoritesCtrl',
			controller: favoritesController,
			templateUrl: 'app/components/favoritesComponent/favorites.template.html',
	});

	function favoritesController(favoritesService) {
	
		var self = this;
		
		self.userFavorites = favoritesService.getFavorites();



	}
})();