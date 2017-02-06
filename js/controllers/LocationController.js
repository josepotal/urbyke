/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('LocationController', function ($scope, BikeFactory, apikey) {
  $scope.title = 'Winter is coming'
})
.controller('someController', function ($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
  uiGmapGoogleMapApi.then(function (maps) {

  })
})
