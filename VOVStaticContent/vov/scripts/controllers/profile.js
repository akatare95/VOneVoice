'use strict';

/**
 * @ngdoc function
 * @name vovApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the vovApp
 */
angular.module('vovApp')
  .controller('ProfileCtrl', function ($scope) {
	    $scope.showProfile = false;
	    $scope.username = "Username";
	    $scope.profile = "My Profile";
	    $scope.notuser = "Not User Name?";
	    $scope.reverseName = function(){
	      $scope.name = $scope.name.split('').reverse().join('');
	    };
	    $scope.profileClick = function(){
	      $scope.showProfile = !$scope.showProfile;
	    }
	    this.awesomeThings = [
	                          'HTML5 Boilerplate',
	                          'AngularJS',
	                          'Karma'
	                          ];
  });
