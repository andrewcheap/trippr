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

          //If data comes back then resolve the promise.
          // Otherwise, reject the promise and send error message.
          if(response.data.status) {
            deferred.resolve(response.data);
          } else {
            deferred.reject(response.data.message)
          }
            
        }, function(data) {
          deferred.resolve(data);
        })
        
        return deferred.promise;
      }
    }
})();