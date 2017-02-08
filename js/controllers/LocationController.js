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
  BikeFactory.getBikeStations()
    .then(function (response) {
      vm.allStationsInfo = response
    })

  // Show details w/ device width is < 650
  vm.showDetails = ''
  vm.showInfo = ''
  vm.moreStations = function () {
    vm.showDetails = (vm.showDetails === 'top-reset') ? '' : 'top-reset'
    vm.showInfo = (vm.showInfo === 'show-info') ? '' : 'show-info'
  }
})
})()
