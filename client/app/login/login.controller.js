'use strict';
(function(){

class LoginComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('grupo2App')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
