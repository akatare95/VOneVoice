'use strict';

describe('Controller: AccessCtrl', function () {

  // load the controller's module
  beforeEach(module('vovApp'));

  var AccessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccessCtrl = $controller('AccessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Attach data from accessService to scope', function () {
    expect(scope.access).toBeDefined();
  });
});
