'use strict';

describe('Filter: searchResultFilter', function () {

  // load the filter's module
  beforeEach(module('vovApp'));

  // initialize a new instance of the filter before each test
  var searchResultFilter;
  beforeEach(inject(function ($filter) {
    searchResultFilter = $filter('searchResultFilter');
  }));

  //TODO Test for filter with text given
  it('should return the input prefixed with "searchResultFilter filter:"', function () {
    var text = 'angularjs';
  //  expect(searchResultFilter(text)).toBe('searchResultFilter filter: ' + text);
  });

});
