'use strict';

angular.module('grupo2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventos-create', {
        url: '/eventos-create',
        template: '<eventos-create></eventos-create>'
      })
      .state('eventos-list', {
        url: '/eventos-list',
        template: '<eventos-list></eventos-list>'
      });
  });
