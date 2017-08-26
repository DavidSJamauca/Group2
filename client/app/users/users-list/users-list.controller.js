'use strict';
(function(){

class UsersListComponent {
  constructor() {
    this.message = 'Hello';
  }
  $onInit() {
            this.usersService.query().$promise
                .then(response => {
                    console.log("USERS", response);
                    this.users = response;
                })
                .catch(err => console.log(err));
        }
}
UsersListComponent.$inject = ['usersService'];

angular.module('grupo2App')
  .component('usersList', {
    templateUrl: 'app/users/users-list/users-list.html',
    controller: UsersListComponent
  });

})();
