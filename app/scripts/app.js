'use strict';

/**
 * @ngdoc overview
 * @name feApp
 * @description
 * # feApp
 *
 * Main module of the application.
 */
angular
  .module('feApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {
      let hello =  {
        name : 'home',
        url : '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }

    $stateProvider.state(hello);

  });
