'use strict';
(function(){

class LoginComponent {
  constructor() {
    this.message = 'Hello';
  }


validar() {
  var login, password;
  login = document.getElementById("names").value;
  password = document.getElementById("password").value;

  if (login = " ") {
      alert("names field is empty");
      return false;
  } else if (password = " ") {
      alert("the password field is empty");
      return false;
    }
  }
}

LoginComponent.$inject = ['usersService'];


angular.module('grupo2App')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
