'use strict';

/**
 * @ngdoc function
 * @name ajinkyaNgAppApp.controller:ApplicationController
 * @description
 * # ApplicationController
 * Controller of the ajinkyaNgAppApp
 */
angular.module('ajinkyaNgAppApp')
  .controller('ApplicationController', function ($scope, $rootScope, USER_ROLES, AuthService, $window) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized();

    $scope.setCurrentUser = function (user) {
      console.log(user);
      $rootScope.currentUser = user;
      $window.sessionStorage.setItem('user', JSON.stringify(user));
    };
    //console.log($scope.currentUser);
  });
