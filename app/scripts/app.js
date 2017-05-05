'use strict';

$(document).foundation();

/**
 * @ngdoc overview
 * @name yoscaffold1App
 * @description
 * # yoscaffold1App
 *
 * Main module of the application.
 */
angular
  .module('yoscaffold1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
