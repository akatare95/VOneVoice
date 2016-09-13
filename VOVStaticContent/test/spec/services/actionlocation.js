'use strict';

describe('Service: ActionLocation', function () {

  // load the service's module
  beforeEach(module('vovApp'));

  // instantiate service
  var ActionLocation;
  beforeEach(inject(function (_ActionLocation_) {
    ActionLocation = _ActionLocation_;
  }));

  //TODO Check with ajax call that this succeeds
  it('should point to an address to get actions from', function () {
    //expect(!!ActionLocation).toBe(true);
  });

});
