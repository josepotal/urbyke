/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('StationsListController', StationsListController)

  function StationsListController ($rootScope, BikeFactory) {
    var vm = this

    BikeFactory.getBikeStations()
      .then(function (response) {
        vm.allStationsInfo = response
      })
    /* vm.$on('centerSelectStation', function (event, artists, searchTerm) {
      vm.history.push(searchTerm)
    }) */

    vm.centerStation = function (idStation) {
      BikeFactory.getStationDetails(idStation)
      .then(function (response) {
        var centerMap = response[0].latitude + ',' + response[0].longitude
        $rootScope.$broadcast('centerSelectStation', centerMap, idStation)
      })
    }
  }
})()
