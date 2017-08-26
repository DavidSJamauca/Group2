'use strict';

angular.module('grupo2App', [
  'grupo2App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
.constant('API', 'http://localhost:8080/crockerApp-crocker_backend-456fb2c4bc07')

  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
