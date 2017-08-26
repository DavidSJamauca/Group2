'use strict';
(function(){

class UsersUpdateComponent {

    constructor(usersService, $stateParams, $state, rolesService) {
    this.usersService = usersService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.rolesService = rolesService;
}
$onInit() {
    this.usersService.get({id:this.$stateParams.idUser}).$promise
        .then(response => {
            this.user = response;
                console.log(this.user);
            })
            .catch(err => console.error(err));
    this.rolesService.query().$promise
        .then(response => {
            this.roles = response;
        })
        .catch(err => console.error(err));
}

updateUser() {
    console.log(this.user);
    this.usersService.update({ id:this.user.id }, this.user).$promise
        .then(response => {
            console.log("Usuario Actualizado")
            this.$state.go('profile-user');
        })
        .catch(err => console.error(err));
  }
}

angular.module('grupo2App')
  .component('usersUpdate', {
    templateUrl: 'app/users/users-update/users-update.html',
    controller: UsersUpdateComponent
  });

})();
