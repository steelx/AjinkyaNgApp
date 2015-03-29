'use strict';

/**
 * @ngdoc function
 * @name ajinkyaNgAppApp.controller:ApplicationController
 * @description
 * # ApplicationController
 * Controller of the ajinkyaNgAppApp
 */
angular.module('ajinkyaNgAppApp')
  .controller('ApplicationController', function ($scope, USER_ROLES, AuthService) {
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      console.log(user);
      $scope.currentUser = user;
    };
    //console.log($scope.currentUser);
  });
