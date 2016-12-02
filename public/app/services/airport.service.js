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

      function getAirportCodes() {

        var deferred = $q.defer();

        var url = '../assets/js/airports.json';

        $http.get(url).then(function(response) {
            deferred.resolve(response.data);
            
        }, function(data) {
          deferred.resolve(data);
        })
        
        return deferred.promise;
      }

      function setAirportObj(airport) {
        airportCode = airport;
      }

      function getAirportObj() {
        return airportCode;
      }
    }
})();