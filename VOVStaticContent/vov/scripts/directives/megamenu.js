'use strict';

/**
 * @ngdoc directive
 * @name vovApp.directive:megaMenu
 * @description
 * # megaMenu
 */
angular.module('vovApp')
  .directive('megaMenu', function () {
    return{
      link:function(scope, element, attrs){
        scope.data=scope[attrs["menuSrc"]];
      },
      restrict:"E",
      replace:"true",
      templateUrl:"views/menuBar/megaMenu.html"


    };
  });
