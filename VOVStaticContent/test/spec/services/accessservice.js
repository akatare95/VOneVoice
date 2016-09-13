'use strict';

describe('Service: accessService', function () {

  // load the service's module
  beforeEach(module('vovApp'));

  // instantiate service
  var accessService;
  beforeEach(inject(function (_accessService_) {
    accessService = _accessService_;
  }));

//write tests once service hits a valid endpoint
  it('Expect object from accessService to have mods property', function(){
    expect(accessService.mods).toBeDefined();
  });
});
