'use strict';
(function(){

class EventosCreateComponent {
  constructor(eventosService) {
    this.eventosService = eventosService;
  }

  createEvento() {
    this.eventosService.save(this.evento).$promise
        .then(response => {
            console.log("Evento registrado correctamente ", response);
            this.$state.go('eventos-list');
        })
        .catch(err => {
            console.log("Error al crear el usuario ", err);
        })
      }
}

EventosCreateComponent.$inject = ['eventosService'];
angular.module('grupo2App')
  .component('eventosCreate', {
    templateUrl: 'app/eventos/eventos-create/eventos-create.html',
    controller: EventosCreateComponent,
    controllerAs: 'vm'
  });

})();
