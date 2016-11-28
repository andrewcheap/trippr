  

  (function getCityInformation() {
    var cities = [];
    $http.get('/api/v1/cities').success(function(data) {
      cities = (JSON.parse(data.info)).Cities || [];
      self.states = cities.map(function(state) {
        return {
          value: state.code,
          display: state.code + '-' + state.countryName
        };
      });
    }).error(function(err) {
      $scope.showSimpleToast('Error: ' +
        JSON.stringify(err) +
        '. Try again!');
    });
  })();