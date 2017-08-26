'use strict';

angular.module('grupo2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventos', {
        url: '/eventos',
        template: '<eventos></eventos>'
      });
  });
