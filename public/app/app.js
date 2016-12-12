(function() {
	'use strict';
	angular.module('trippr.app', [	
			// external dependencies
		
			// internal dependencies
			'trippr.search',
			'trippr.favorites',
			'trippr.routes'
	]);
	angular.bootstrap(document, ['trippr.app']);
})();

