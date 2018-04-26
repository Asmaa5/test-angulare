'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('AboutCtrl', function ($scope,toastr) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.save = function () {
        console.log($scope.user);
        toastr.success('user added successfully');
    }
    
  });
