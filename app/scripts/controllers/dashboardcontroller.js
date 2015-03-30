'use strict';

/**
 * @ngdoc function
 * @name ajinkyaNgAppApp.controller:DashboardController
 * @description
 * # DashboardController
 * Controller of the ajinkyaNgAppApp
 */
angular.module('ajinkyaNgAppApp')
  .controller('DashboardController', function ($scope, AuthService) {
    if (AuthService.isAuthenticated()) {
    	alert('true');
    };
  });
