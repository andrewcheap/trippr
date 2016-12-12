(function() {
  'use strict';

  angular.module('trippr.favorites')
    .service('favoritesService', [favoritesService]);

    function favoritesService() {

      var self = this;
      self.getFavorites = getFavorites;

      function getFavorites() {
        return JSON.parse(localStorage.getItem('favoritesArray')) || [];
      }

    }
})();