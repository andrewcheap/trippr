(function() {
  'use strict';
  /*jshint validthis: true */

  angular.module('trippr.favorites')
    .service('favoritesService', [favoritesService]);

    function favoritesService() {

      var self = this;
      self.getFavorites = getFavorites;

      // Gets object from localStorage
      function getFavorites() {
        return JSON.parse(localStorage.getItem('favoritesArray')) || [];
      }

    }
})();