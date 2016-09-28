'use strict';

const app = angular.module('tinderAssemble', ['ngRoute'])

console.log('hello main.js')

app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: './partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/register', {
      templateUrl: './partials/register.html',
      controller: 'RegisterCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
