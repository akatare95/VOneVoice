'use strict';

describe('Controller: UserrequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('vovApp'));

  var UserrequestsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserrequestsCtrl = $controller('UserrequestsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserrequestsCtrl.awesomeThings.length).toBe(3);
  });
});
