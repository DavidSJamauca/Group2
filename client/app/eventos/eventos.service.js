'use strict';

function eventosService($resource, API) {
    return $resource(API + '/api/usuarios/:id', {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    })
}
eventosService.$inject = ['$resource', 'API'];
angular.module('grupo2App')
  .factory('eventosService', eventosService);
