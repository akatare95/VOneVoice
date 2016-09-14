'use strict';

describe('Service: InfoLocation', function () {

  // load the service's module
  beforeEach(module('vovApp'));

  // instantiate service
  var InfoLocation;
  beforeEach(inject(function (_InfoLocation_) {
    InfoLocation = _InfoLocation_;
  }));

  //TODO Check that the address provided is a string and has a json object from a call
  it('should do something', function () {
    //expect(!!InfoLocation).toBe(true);
  });

});
