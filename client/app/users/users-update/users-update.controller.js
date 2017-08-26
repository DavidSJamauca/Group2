'use strict';
(function(){

class UsersUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('grupo2App')
  .component('usersUpdate', {
    templateUrl: 'app/users/users-update/users-update.html',
    controller: UsersUpdateComponent
  });

})();
