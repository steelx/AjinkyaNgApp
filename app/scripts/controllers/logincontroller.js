'use strict';

/**
 * @ngdoc function
 * @name ajinkyaNgAppApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the ajinkyaNgAppApp
 */
angular.module('ajinkyaNgAppApp')
  .controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $location) {
    $scope.credentials = {
      username: '',
      password: ''
    };
    $scope.login = function (credentials) {
      AuthService.login(credentials).then(function (user) {
				//user =  {sessionId: "zcsd", loginSucceeded: true, userRole: "editor"}
        if(user){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $scope.setCurrentUser(user);
          $location.path('/dashboard');
          $scope.$apply();
        } else {
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
          console.log('no good');
        }

      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  });
