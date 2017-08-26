'use strict';

function usersService($resource, API) {
    return $resource(API + '/api/users/:id', {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}

usersService.$inject = ['$resource', 'API'];
angular.module('grupo2App')
    .factory('usersService', usersService);  
