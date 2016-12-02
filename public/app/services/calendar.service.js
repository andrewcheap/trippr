(function() {
  'use strict';

  angular.module('trippr.calendar')
    .service('calendarDateService', [calendarDateService]);

    function calendarDateService() {

      var self = this;
      self.setDates = setDates;
      self.getDates = getDates;

      var dates = {};

      function setDates(departDate, returnDate) {
        dates.departureDate = departDate;
        dates.returnDate = returnDate;
      }

      function getDates() {
        return dates;
      }
    }
})();