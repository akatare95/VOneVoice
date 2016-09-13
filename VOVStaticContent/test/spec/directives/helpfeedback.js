'use strict';

describe('Directive: helpFeedback', function () {

  // load the directive's module
  beforeEach(module('vovApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should display help and feedback tabs', inject(function ($compile) {
    element = angular.element('<help-feedback></help-feedback>');
    element = $compile(element)(scope);
  //  expect(element.text()).toBe('this is the helpFeedback directive');
    //TODO Define what the contents should be
  }));
});
