'use strict';

/**
 * @ngdoc service
 * @name ajinkyaNgAppApp.Session
 * @description
 * # Session
 * Service in the ajinkyaNgAppApp.
 */
angular.module('ajinkyaNgAppApp')
  .service('Session', function ($window) {
    this.create = function (sessionId, loginSucceeded, userRole) {
      this.user = {
        id : sessionId,
        loginSucceeded: loginSucceeded,
        userRole : userRole
      };

      $window.sessionStorage.setItem('user', JSON.stringify(this.user))
    };
    this.destroy = function () {
      this.user = {
        id : null,
        loginSucceeded: null,
        userRole : null
      };

      $window.sessionStorage.removeItem('user');
    };
  });
