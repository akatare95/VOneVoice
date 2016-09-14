'use strict';

/**
 * @ngdoc function
 * @name vovApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the vovApp, for only the footer section. Gets the year.
 */
angular.module('vovApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.year = new Date().getFullYear(); //get the year for the footer
  });
