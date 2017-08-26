'use strict';

angular.module('grupo2App')
    .config(function($stateProvider) {
        $stateProvider
            .state('users-update', {
                url: '/users-update',
                template: '<users-update></users-update>'
            })

        .state('users-create', {
            url: '/users-create',
            template: '<users-create></users-create>'
        })

        .state('users-list', {
            url: '/users-list',
            template: '<users-list></users-list>'
        });
    });