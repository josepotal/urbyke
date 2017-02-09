/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('LocationController', function ($rootScope, BikeFactory, NgMap) {
  var vm = this

  BikeFactory.getBikeStations()
    .then(function (response) {
      vm.allStationsInfo = response
    })
  vm.centerMap = 'current-position'
  vm.centerStation = function (idStation) {
    BikeFactory.getStationDetails(idStation)
      .then(function (response) {
        vm.centerMap = response[0].latitude + ',' + response[0].longitude
        console.log(vm.centerMap)
      })
  }
})
})()

