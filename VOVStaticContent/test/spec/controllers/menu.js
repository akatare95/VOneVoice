'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('vovApp'));

  var MenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

//TODO Add more tests
  it('should have menu content in scope', function () {
    expect(scope.menuContent).toBeDefined();  //Test that menu content made it
  });
});
