'use strict';

const app = angular.module('tinderAssemble', ['ngRoute'])

console.log('hello main.js')

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $routeProvider
    .when('/login', {
      templateUrl: './partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: './partials/register.html',
      controller: 'RegisterCtrl'
    })
    .when('/profile', {
      templateUrl: './partials/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/search', {
      templateUrl: './partials/search.html',
      controller: 'SearchCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

})
