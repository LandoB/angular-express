'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexController'
    }).
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'LoginController'
    }).
    when('/register', {
      templateUrl: 'partials/register',
      controller: 'RegisterController'
    }).
    when('/todo', {
      templateUrl: 'partials/todo',
      controller: 'TodoController'
    }).
    when('/todoList', {
      templateUrl: 'partials/todoList',
      controller: 'TodoListController'
    }).
    otherwise({
      redirectTo: '/login'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
