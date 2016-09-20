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
      link: function postLink(scope, element, attrs) {
        //get category object
        var category = scope[attrs["searchCategory"]]; //object containing search category
        var headingProperty = attrs["headingProperty"]; //property to get heading from
        var elementsProperty = attrs["elementsProperty"]; //property that has the array of elements
        var elementSearchableProperty = attrs["elementSearchableProperty"]; //property to be searched
        var searchTerm = scope[attrs["searchTerm"]];  //searchTerm field
        var hID = attrs["headerId"];//id to give header

        /**
        * Creates a search result, with which digest is called, and
        * returns a string if no term found, or itself if it finds
        * the given term in the given string
        */
        function SearchResult(searchString, soughtTerm){
          //store lower cse versions of term and input
          this.lStr = searchString.toLowerCase();
          this.lTerm = soughtTerm.toLowerCase();
          //get first occurance index
          this.fIndex = this.lStr.indexOf(this.lTerm);
          this.tLen = soughtTerm.length;//get length of term
          //make an update method
          this.updateTerm = function(sT){
            this.lTerm = sT.toLowerCase();
            this.fIndex = this.lStr.indexOf(this.lTerm);
            this.tLen = sT.length;
            //call digest to update 
            this.digest();
          }
          /**
          * Take the string apart if there is an occurance of the
          *  sought term, return this object if it is found,
          *  or the search term string if it is not
          */
          this.digest = function(){

            if(searchString.length < this.tLen){
              return searchString;
            }//not found
            if(this.fIndex == -1){
              return searchString;
            }//not found
            //get start of string, term part, and digest end
            this.start = searchString.substring(0, this.fIndex);
            this.sT = searchString.substr(this.fIndex, this.tLen);
            //create temporary end
            this.end = searchString.substring(this.fIndex+this.tLen, searchString.length);
            //now digest for end
            this.end = new SearchResult(this.end, soughtTerm).digest();
            //this.end is now either a digested search result or a string
            //return this, to signify a match was found
            return this;
          }//end the digest function
          /**
          * Create the plain text html for this result
          */
          this.html = function(){
            var res = this.digest();//get resulting digest or string
            if(angular.isString(res)){
              return false;
            }//fail an if check
            var sH = angular.element('<span>');//start span
            sH.text(this.start);//start
            var tr = angular.element('<span>');//term span
            tr.addClass('searchMatch');//bold it
            sH.after(tr);//put middle after start
            tr.text(this.sT);//search term section
            var eH = angular.element('<span>'); //end if end is string

            if(angular.isString(this.end)){
              eH.text(this.end);
              tr.after(eH); //put end after middle
            }else{
              eH = tr.after(this.end.html()); //put result after middle
              //needs to build itself
            }//end decision on whether to digest end or not
            //now each piece is connected, return start span
            return sH;
          }//end method to generate html for this result
          /**
          * Property for reuse, used to check if the term is contained in
          * the given string
          */
          this.containsTerm = function(){return this.fIndex != -1;}
        }//end class definition for SearchResult


        /**
        * Find the given term in the given string or false
        */
        var findTerm = function(source, term){
          //check that both are strings
          if(!angular.isString(source) || !angular.isString(term)){
            return false;
          }
          //html or false for search result
          return new SearchResult(source, term).html();
        }
        /**
        * Function to check if the given element's given property
        * contains the given term.
        */
        var searchElement = function(e, prop, term){
          //check that e is an object
          if(!angular.isObject(e)){
            return false;
          }
          //check that prop and term are both strings
          if(!angular.isString(prop) || !angular.isString(term)){
            return false;
          }
          //check that e has it's own property prop
          if(!e.hasOwnProperty(prop)){
            return false; //searched for property not existing
          }
          //collect digested property, or false if it doesn't contain term
          var result = findTerm(e[prop], term);
          return result;//dom or false if no matches
        }//end method to search an element's given property for the given term
        /**
        * Function to search an array of properties for the given term on
        * the given element
        */
        var searchProps = function(e, props, term){
          //if props is a string, return result from above
          if(angular.isString(props)){
            return searchElement(e, props, term);
          }//end check for single property
          //check if unrecognized format, i.e. not array
          if(!angular.isArray(props)){
            return false;
          }//end check for not array
          //loop through array, search each property for term
          var res = {};
          var matchFound = false;
          for(var i = 0; i< props.length; i++){
            var cur = searchElement(e, props[i], term);//get current element
            if(cur){
              //match found, add property and result
              res[props[i]]=cur;
              matchFound = true;//MATCH!
            }//end check for match found
          }//end loop to find any matches
          //if no match found, return false
          if(!matchFound){
            return false; //no properties match
          }//end check for no match
          //for each property not in the result, add it and it's current text
          for(var i = 0; i < props.length; i++){
            var curProp = props[i];//current property
            if(!res.hasOwnProperty(curProp)){
              //doesn't have it yet, add as string
              var ele = angular.element('<span>');
              ele.text(e[curProp]);//add text to span for current property
              res[curProp] = ele; //res.curProp: element
            }//end check for need to create the element for the property
          }//end loop to generate the elements for missing properties
          //now that res has all the original properties, correctly formatted, return it
          return res;
        }//end method to search for the term in given properties of the element
        //watch the search term in the scope
        scope.$watch("searchTerm", function(newValue){
          var heading = angular.element('<span>');//create span for heading
          //add category heading as text to element
          heading.text(category[headingProperty]);//Text is now heading property
          //Add classes and everything to heading
          heading.addClass('open'); //add open class
          heading.attr('id', hID);//add id
          //collect searchTerm
          var newTerm = newValue;
          //TODO create an array to store the elements that match
          //TODO for each element, if it matches, put it in the array
          //TODO if array is not empty, make the elements for each element in the array
          //TODO append each element to the heading after the span
        });
        element.text('this is the searchCategory directive');
      }
    };
  });
