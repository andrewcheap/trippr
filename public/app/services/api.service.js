(function() {
  'use strict';
  /*jshint validthis: true */

  angular.module('trippr.search')
    .service('apiDataService', ['$http', '$q', apiDataService]);

    function apiDataService($http, $q) {

      var self = this;
      self.getFlightInfo = getFlightInfo;

      // Function makes asynchronous request and returns a promise
      function getFlightInfo(departureDate, returnDate, airportCode) {
        
        var deferred = $q.defer();

        var url = '/api/v1/places?origin='+ airportCode +'&departuredate='+ departureDate +'&returndate='+ returnDate +'';

        $http.get(url).then(function(response) {

          //If data comes back then resolve the promise.
          // Otherwise, reject the promise and send error message.
          if(response.data.status) {
            deferred.resolve(response.data);
          } else {
            deferred.reject(response.data.message);
          }
            
        }, function(data) {
            // Error callback rejects the promise
            deferred.reject(data);
        });
        
        // Retrieve the promise once it has been resolved or rejected
        return deferred.promise;
      }
    }
})();