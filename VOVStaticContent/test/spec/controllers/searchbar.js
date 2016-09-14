'use strict';

describe('Controller: SearchbarCtrl', function () {

  // load the controller's module
  beforeEach(module('vovApp'));

  var SearchbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchbarCtrl = $controller('SearchbarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have an object called search on scope', function () {
    expect(scope.search).toBeDefined();
  });
  //TODO Test that action info and additional exist and are not empty, and users are returned
});
