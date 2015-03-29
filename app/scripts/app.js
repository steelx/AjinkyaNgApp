'use strict';

/**
 * @ngdoc overview
 * @name ajinkyaNgAppApp
 * @description
 * # ajinkyaNgAppApp
 *
 * Main module of the application.
 */
angular
  .module('ajinkyaNgAppApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
  })
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ApplicationController'
      })
      .when('/login', {
        templateUrl: 'views/loginform.html',
        controller: 'LoginController'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html'
        // data: {
        //   authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        // }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
