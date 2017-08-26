'use strict';
(function() {

    class UsersListComponent {
        constructor(usuariosService) {
            this.usuariosService = usuariosService;
        }
        $onInit() {
            this.usuariosService.query().$promise
                .then(response => {
                    console.log("usuarios ok", response);
                    this.usuarios = response;
                })
                .catch(err => {
                    console.log("error", err);
                });
        }
    }

    angular.module('grupo2App')
        .component('usersList', {
            templateUrl: 'app/users/users-list/users-list.html',
            controller: UsersListComponent,
            controllerAs: 'vm'
        });

})();