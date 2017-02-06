/* eslint no-undef: "off" */
angular.module('urbykeApp')
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/templates/main.html',
      controller: 'LocationController'
    })
    .otherwise('/')
})
.config(function (uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'google-map-apikey',
    v: '3.20', // defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  })
})
