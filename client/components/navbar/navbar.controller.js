'use strict';

  class NavbarController {
    ocultarCollapse(){
        $('.navbar-collapse').collapse('hide');

    }
}

angular.module('grupo2App')
  .controller('NavbarController', NavbarController);
