'use strict';

describe('Controller: FooterCtrl', function () {

  // load the controller's module
  beforeEach(module('vovApp'));

  var FooterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooterCtrl = $controller('FooterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('year', function () {
    expect(scope.year).toEqual(new Date().getFullYear());
  });
});
