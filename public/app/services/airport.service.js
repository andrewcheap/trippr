(function() {
  'use strict';

  angular.module('trippr.airportSearch')
    .service('airportCodeService', ['$http', '$q', airportCodeService]);

    function airportCodeService($http, $q) {

      var self = this;
      self.setAirportObj = setAirportObj;
      self.getAirportObj = getAirportObj;
      self.getAirportCodes = getAirportCodes;

      var airportCode = undefined;

      // Function makes asynchronous request and returns a promise
      function getAirportCodes() {

        // Create promise instance
        var deferred = $q.defer();

        var url = '../assets/js/airports.json';

        // Make a request for the data.
        $http.get(url).then(function(response) {

            // If request is successful, resolve the promise
            deferred.resolve(response.data);
            
        }, function(data) {
            // Error callback, reject the promise
            deferred.reject(data);
        })
        
        // Retrieve the promise once it has been resolved or rejected
        return deferred.promise;
      }

      // Setter for airport object
      function setAirportObj(airport) {
        airportCode = airport;
      }

      // Getter for airport object
      function getAirportObj() {
        return airportCode;
      }
    }
})();