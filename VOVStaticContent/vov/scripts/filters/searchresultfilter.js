'use strict';

/**
 * @ngdoc filter
 * @name vovApp.filter:searchResultFilter
 * @function
 * @description
 * # searchResultFilter
 * Filter in the vovApp.
 */
angular.module('vovApp')
  .filter('searchResultFilter', function () {
    //filter to attempt to make the selected term bold in the results
  	return function(value, searchTerm){
  		//check if the value is a string, as is the searchTerm
  		if(angular.isString(value) && angular.isString(searchTerm)){
  			//find search term in lowercase string
  			var index = value.toLowerCase().indexOf(searchTerm.toLowerCase());
  			var endDex = index + searchTerm.length;//end of string
  			//index shouldn't be -1, but if so, return value
  			if(index == -1)
  				return value;
  			//at this point start index is known, create 3 substrings
  			//first part
  			var startStr = value.substring(0, index);
  			//searched for part
  			var searchStr = value.substring(index, endDex);
  			//final bit of string
  			var endStr = value.substring(endDex, value.length);
  			//TODO apparently, lowercase start of end string

  			//concat the three parts with strong on term
  			var result = startStr + "<strong>"
  				+ searchStr + "</strong>" + endStr;
  			//return html?
  			return result;
  		}else{
  			//one is not a string, return unfiltered value
  			return value;
  		}
  	};
  });
