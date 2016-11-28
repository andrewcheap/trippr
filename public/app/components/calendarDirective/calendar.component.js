(function() {
	'use strict';

	angular.module('trippr.calendar')
		.component('tripprCalendar', {
			templateUrl: 'app/components/calendarDirective/calendar.template.html',
			controller: calendarController,
			controllerAs: 'calendar',
			bindings: {
			}
		})

		function calendarController($scope) {

			var self = this;

			self.openDepartureCalendar = openDepartureCalendar;
			self.openReturnCalendar = openReturnCalendar;
			self.updateDate = updateDate;

			activate();

			///////////////////////////////
			function activate() {
				self.departureDate = new Date();
				self.returnDate = new Date();
			}

			self.popupDepartureCalendar = {
				opened: false
			}

			function openDepartureCalendar() {
				self.popupDepartureCalendar.opened = true;
			}

			self.popupReturnCalendar = {
				opened: false
			}

			function openReturnCalendar() {
				self.popupReturnCalendar.opened = true;
			}

			self.dateOptionsDeparture = {
				formatYear: 'yy',
				maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
				minDate: new Date(),
				startingDay: 1
			}

			function updateDate() {
				console.log("departure", self.departureDate);
				console.log("return", self.returnDate);
				// Watch the departureDate.  
				$scope.$watch('departureDate', function() {
					console.log("departure", self.departureDate);
					console.log("return", self.returnDate);
					// We check change the returnDate to be on or after the departureDate.
					if(self.returnDate < self.departureDate) {
						self.returnDate = self.departureDate;
					}

					// We update the return date options so that
					// the user cannot select a date before the departure date.
					self.dateOptionsReturn = {
						formatYear: 'yy',
						maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
						minDate: self.departureDate,
						startingDay: 1
					};
				});
			}


	}
})();