'use strict';

describe('Component: UsersUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('grupo2App'));

  var UsersUpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UsersUpdateComponent = $componentController('UsersUpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
