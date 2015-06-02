'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('LoginController', function ($scope) {
    // write Ctrl here

  }).
  controller('RegisterController', function ($scope) {
    // write Ctrl here

  }).
  controller('TodoController', function ($scope) {
    // Something goes here

  }).
  controller('TodoListController', function ($scope) {
    // Something goes here too.
    $scope.message = 'Hello I am the NEEDS PAGE';
    $scope.tasks=[];
    $scope.readTasks=function(task){
      $scope.tasks.push(task);
    };
  });
