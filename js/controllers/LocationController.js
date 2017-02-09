/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('LocationController', function ($rootScope, BikeFactory, NgMap) {
  var vm = this

  // var bcn = new google.maps.LatLng(41.3850639, 2.1734035)
  // NgMap.getMap().then(function (map) {
  //   vm.map = map
  // })
  // vm.map.setCenter(bcn)

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
.controller('SearchLocationController', function ($rootScope, SearchFactory, BikeFactory, NgMap) {
  console.log('SearchLocationController...')
  searchFactory.searchStation()
        .then(function (response) {
          vm.stationSearch = response
          console.log(vm.stationSearch)
          $rootScope.bikes = response
        })
})
})()

