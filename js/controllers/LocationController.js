/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('LocationController', function ($scope, BikeFactory, apikey, NgMap) {
  $scope.title = 'Winter is coming'
  $scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + apikey
  console.log($scope.googleMapsUrl)
  NgMap.getMap().then(function (map) {
    console.log(map.getCenter())
    console.log('markers', map.markers)
    console.log('shapes', map.shapes)
  })
})
