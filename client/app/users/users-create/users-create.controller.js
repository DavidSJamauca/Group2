'use strict';
(function(){

class UsersCreateComponent {
  constructor() {
    this.usersService = usersService;
  }
  createUser() {
            this.usersService.save(this.users).$promise
                .then(response => {
                    console.log("Successfully registered user...", response);
                })
                .catch(err => {
                    console.log("Error registering user...", err);
                })
        }
}

UsersCreateComponent.$inject = ['usersService'];
angular.module('grupo2App')
  .component('usersCreate', {
    templateUrl: 'app/users/users-create/users-create.html',
    controller: UsersCreateComponent
  });

})();
