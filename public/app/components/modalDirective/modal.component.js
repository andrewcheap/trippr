(function() {
	'use strict';

	angular.module('trippr.modal')
		.component('modal', {
			templateUrl: 'app/components/modalDirective/modal.template.html',
			controller: modalController,
			controllerAs: 'modal',
			bindings: {
			  resolve: '<',
			  close: '&',
			  dismiss: '&'
			},
		});

		function modalController() {
			var self = this;

		    self.ok = function () {
		      self.close();
		    };

		}
})();