'use strict';
(function(){

class EventosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('grupo2App')
  .component('eventos', {
    templateUrl: 'app/eventos/eventos.html',
    controller: EventosComponent
  });

})();
