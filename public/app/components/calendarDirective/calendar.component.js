(function() {
	'use strict';
	/*jshint validthis: true */

	angular.module('trippr.calendar')
		.component('calendar', {
			templateUrl: 'app/components/calendarDirective/calendar.template.html',
			controller: calendarController,
			controllerAs: 'calendar',
		});

		function calendarController(calendarDateService) {

			var self = this;

			self.openDepartureCalendar = openDepartureCalendar;
			self.openReturnCalendar = openReturnCalendar;
			self.updateDate = updateDate;

			activate();

			///////////////////////////////
			function activate() {
				self.departureDate = new Date();
				self.returnDate = new Date();
				calendarDateService.setDates(self.departureDate, self.returnDate);
			}

			self.popupDepartureCalendar = {
				opened: false
			};

			function openDepartureCalendar() {
				self.popupDepartureCalendar.opened = true;
			}

			self.popupReturnCalendar = {
				opened: false
			};

			function openReturnCalendar() {
				self.popupReturnCalendar.opened = true;
			}

			self.dateOptionsDeparture = {
				showWeeks: false,
				maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
				minDate: new Date(),
				startingDay: 1
			};


			// called when the dates are changed in the calendar
			function updateDate() { 
				// We check change the returnDate to be on or after the departureDate.
				if(self.returnDate < self.departureDate) {
					self.returnDate = self.departureDate;
				}

				// We update the return date options so that
				// the user cannot select a date before the departure date.
				self.dateOptionsReturn = {
					showWeeks: false,
					maxDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
					minDate: self.departureDate,
					startingDay: 1
				};

				// Set dates in service
				calendarDateService.setDates(self.departureDate, self.returnDate);
			}
	}
})();