'use strict';

/**
 * @ngdoc service
 * @name ajinkyaNgAppApp.AuthService
 * @description
 * # AuthService
 * Factory in the ajinkyaNgAppApp.
 */
angular.module('ajinkyaNgAppApp')
  .factory('AuthService', function ($http, Session) {
    var authService = {};
   
    authService.login = function (credentials) {
      return $.post('http://localhost:8080/login', credentials)
        .then(function (res) {
          Session.create(res.sessionId, res.loginSucceeded, 'editor');
          return res;
        });
    };
   
    authService.isAuthenticated = function () {
      //console.log(Session);
      return Session.user.loginSucceeded;
    };
   
    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.user.userRole) !== -1);
    };
   
    return authService;
  });
