(function() {
  'use strict';

  angular.module('trippr.search')
    .service('apiDataService', ['$http', '$q', apiDataService]);

    function apiDataService($http, $q) {

      var self = this;
      self.getFlightInfo = getFlightInfo;

      function getFlightInfo(departureDate, returnDate, airportCode) {
        
        var deferred = $q.defer();

        var url = '/api/v1/places?origin='+ airportCode +'&departuredate='+ departureDate +'&returndate='+ returnDate +'';

        $http.get(url).then(function(response) {
            deferred.resolve(response.data);
            
        }, function(data) {
          deferred.resolve(data);
        })
        
        return deferred.promise;
      }
    }
})();