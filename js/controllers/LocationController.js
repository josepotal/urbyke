/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('LocationController', LocationController)

 function LocationController (BikeFactory, NgMap) {
  var vm = this

  NgMap.getMap().then(function (map) {
    var map = map

    console.log(map.getCenter())
    console.log('markers', map.markers)
    console.log('shapes', map.shapes)
  })

  BikeFactory.getBikeStations()
 .then(function (response) {
   vm.allStationsInfo = response
   console.log(vm.allStationsInfo)
 })

 //add function on map. https://ngmap.github.io/#/!event-simple.html
}
