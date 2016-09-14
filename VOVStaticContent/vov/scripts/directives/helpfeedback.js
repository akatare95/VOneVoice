'use strict';

/**
 * @ngdoc directive
 * @name vovApp.directive:helpFeedback
 * @description
 * # helpFeedback
 */
angular.module('vovApp')
  .directive('helpFeedback', function () {

return{
      restrict: "E",
      replace: 'true',
      template: "<ul id='help-feedback'>" +
          "<li class='help'>" +
          "<a title='Help' href='#'></a>" +
          "</li>" +
          "<li class='feedback'>" +
          "<a title='Feedback' href='#'><span></span></a>" +
          "</li>" +
          "</ul>"
    };
  });
