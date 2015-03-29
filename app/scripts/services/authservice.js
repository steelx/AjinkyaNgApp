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
          var userRole  = { role: 'editor'};
          
          return jQuery.extend(res, userRole);;
        });
    };
   
    authService.isAuthenticated = function () {
      //console.log(Session);
      return Session.loginSucceeded;
    };
   
    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };
   
    return authService;
  });
