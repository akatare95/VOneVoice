
'use strict';

/**
 * @ngdoc overview
 * @name vovApp
 * @description
 * # vovApp
 *
 * Main module of the application.
 */
angular
  .module('vovApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // .state('/secondroute3', {
    //   templateUrl: 'views/secondroute3.html',
    //   controller: 'Secondroute3Ctrl'
    // })
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('access', {
      url: '/',
      templateUrl: 'views/access.html',
      controller: 'AccessCtrl'
    })
});
