'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */

  app.controller('MainCtrl', function ($scope,$uibModal,$uibModalStack) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $scope.login_pop = function () {
          $scope.modalInstance = $uibModal.open({
              templateUrl: 'views/popup/login.html',
              controller: 'MainCtrl'
          });
      }

      $scope.close = function () {
          $uibModalStack.dismissAll();
      };
  });
