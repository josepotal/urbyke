/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('LocationController', function (BikeFactory, apikey, NgMap) {
  var vm = this
  vm.title = 'Winter is coming'
  vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + apikey
  console.log(vm.googleMapsUrl)
  // NgMap.getMap().then(function (map) {
  //   console.log(map.getCenter())
  //   console.log('markers', map.markers)
  //   console.log('shapes', map.shapes)
  // })
})
