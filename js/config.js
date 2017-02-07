/* eslint no-undef: "off" */
angular.module('urbykeApp')
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/templates/main.html',
      controller: 'LocationController',
      controllerAs: 'vm'
    })
    .otherwise('/')
})
