'use strict';
(function(){

class UsersListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('grupo2App')
  .component('usersList', {
    templateUrl: 'app/users/users-list/users-list.html',
    controller: UsersListComponent
  });

})();
