'use strict';

describe('Directive: megaMenu', function () {

  // load the directive's module
  beforeEach(module('vovApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  //TODO Define elements in the directive
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mega-menu></mega-menu>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the megaMenu directive');
  }));
});
