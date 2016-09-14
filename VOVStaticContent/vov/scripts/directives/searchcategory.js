'use strict';

/**
 * @ngdoc directive
 * @name vovApp.directive:searchCategory
 * @description
 * # searchCategory
 */
angular.module('vovApp')
  .directive('searchCategory', function () {
    //Data I need: category, object property for heading, current search term, property to search
    return {
      template: '<div></div>',
      restrict: 'A',
      scope: {
        searchTerm: "@searchTerm",   //Name of the property that has the current search term
        searchCategory: "@searchCategory"
      },
      link: function postLink(scope, element, attrs) {
        //get category object
        var category = scope[attrs["searchCategory"]]; //object containing search category
        var headingProperty = attrs["headingProperty"]; //property to get heading from
        var elementsProperty = attrs["elementsProperty"]; //property that has the array of elements
        var elementSearchableProperty = attrs["elementSearchableProperty"]; //property to be searched
        //watch the search term in the scope
        scope.$watch("searchTerm", function(){
          var heading = angular.element('<span>');//create span for heading
          //add category heading as text to element
          heading.text(category[headingProperty]);//Text is now heading property
          //TODO Add classes and everything to heading
          //TODO collect searchTerm
          //TODO create an array to store the elements that match
          //TODO for each element, if it matches, put it in the array
          //TODO if array is not empty, make the elements for each element in the array
          //TODO append each element to the heading after the span
        });
        element.text('this is the searchCategory directive');
      }
    };
  });
