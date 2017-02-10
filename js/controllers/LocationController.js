/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('LocationController', LocationController)

  function LocationController ($scope, BikeFactory, NgMap) {
    var vm = this

    BikeFactory.getBikeStations()
      .then(function (response) {
        vm.allStationsInfo = response
      })

    vm.centerMap = 'current-position'

    $scope.$on('centerSelectStation', function (event, centerMap) {
      vm.centerMap = centerMap
    })
  }
})()
