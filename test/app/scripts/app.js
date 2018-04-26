'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # testAppApp
 *
 * Main module of the application.
 */
var app = angular
  .module('testAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
     'ui.bootstrap',
      'ui.router',
      'jkAngularCarousel',
      'toastr'
  ])
  .config(function ($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',

    })
        .when('/slide', {
            templateUrl: 'views/slide.html',
            controller: 'slider',
        })

      .otherwise({
        redirectTo: '/'
      });
  });
