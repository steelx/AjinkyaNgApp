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
      this.id = sessionId;
      this.userId = sessionId;
      this.userRole = userRole;
      this.loginSucceeded = loginSucceeded;
      $window.sessionStorage.setItem('user', this.userId)
    };
    this.destroy = function () {
      this.id = null;
      this.userId = null;
      this.userRole = null;
      this.loginSucceeded = null;

      $window.sessionStorage.removeItem('user');
    };
  });
