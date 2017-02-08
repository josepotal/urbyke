/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('LocationController', function (BikeFactory, NgMap) {
  var vm = this

  // NgMap.getMap().then(function (map) {
  //   this.map = map

  //   console.log(map.getCenter())
  //   console.log('markers', map.markers)
  //   console.log('shapes', map.shapes)
  // })
  vm.top = ''
  vm.mostrar = ''
  vm.aumentar = function () {
    vm.top = (vm.top === 'aumen') ? '' : 'aumen'
    vm.mostrar = (vm.mostrar === 'most') ? '' : 'most'
    console.log(vm.top)
  }
  console.log(vm.top)
  BikeFactory.getBikeStations()
    .then(function (response) {
      vm.allStationsInfo = response
    })
})
})()
