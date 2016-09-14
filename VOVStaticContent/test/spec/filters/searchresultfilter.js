'use strict';

describe('Filter: searchResultFilter', function () {

  // load the filter's module
  beforeEach(module('vovApp'));

  // initialize a new instance of the filter before each test
  var searchResultFilter;
  beforeEach(inject(function ($filter) {
    searchResultFilter = $filter('searchResultFilter');
  }));

  //TODO Test for filter with text given, with multiple instances of search term
  it('should return the input string with strong around the given search term', function () {
    var text = 'angularjs'; //string to search
    var searchTerm = 'gu';//search term
    var result = 'an<strong>gu</strong>larjs';//result expected
    expect(searchResultFilter(text, searchTerm)).toBe(result);
  });

});
