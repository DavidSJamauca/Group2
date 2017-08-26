'use strict';
(function() {

    class UsersCreateComponent {
        constructor(usuariosService, $state) {
            this.usuariosService = usuariosService;
            this.$state = $state;
        }
        createUser() {
            this.usuariosService.save(this.usuario).$promise
                .then(response => {
                    console.log("Usuario registrado correctamente", response);
                    this.$state.go('users-list');
                })
                .catch(err => {
                    console.log("Error al crear el usuario", err);
                })
        }
    }

    angular.module('grupo2App')
        .component('usersCreate', {
            templateUrl: 'app/users/users-create/users-create.html',
            controller: UsersCreateComponent,
            controllerAs: 'vm'
        });

})();