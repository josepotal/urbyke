/* eslint no-undef: "off" */
angular.module('urbykeApp')
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/templates/main.html',
      controller: 'LocationController',
      controllerAs: 'vm'
    })

    .when('/details/:idStation', {
      templateUrl: 'js/templates/details.html',
      controller: 'DetailsController',
      controllerAs: 'vm'
     })

    .otherwise('/')
})
