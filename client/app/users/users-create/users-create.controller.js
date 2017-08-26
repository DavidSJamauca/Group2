'use strict';
(function(){

class UsersCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('grupo2App')
  .component('usersCreate', {
    templateUrl: 'app/users/users-create/users-create.html',
    controller: UsersCreateComponent
  });

})();
