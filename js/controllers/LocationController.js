/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('LocationController', function (BikeFactory, NgMap) {
  var vm = this;

  NgMap.getMap().then(function(map) {
    var map = map;
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

  
 BikeFactory.getBikeStations()
 .then(function(response) {
  vm.info = response
  console.log(vm.info)
  
 })
  // .then(function(response){
  //   vm.stations = response.data.network.stations
  //   console.log(vm.stations)
  // })

  vm.info1 = {id:"111", address:"Plaça Catalunya", slots: 8, bikes:13}
  vm.station2 = 'Station2'

});