/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('StationsListController', StationsListController)

  function StationsListController ($rootScope, BikeFactory) {
    var vm = this

    BikeFactory.getBikeStations()
      .then(function (response) {
        vm.allStationsInfo = response
        vm.hasMoreItemsToShow = hasMoreItemsToShow
      })
// Pagination functionality
    var pagesShown = 1
    var pageSize = 5
    vm.paginationLimit = function (data) {
      return pageSize * pagesShown
    }
    function hasMoreItemsToShow () {
      return pagesShown < (vm.allStationsInfo.length / pageSize)
    }
    vm.showMoreItems = function () {
      pagesShown = pagesShown + 1
    }
// Center Station
    vm.centerStation = function (idStation) {
      BikeFactory.getStationDetails(idStation)
      .then(function (response) {
        var centerMap = response[0].latitude + ',' + response[0].longitude
        $rootScope.$broadcast('centerSelectStation', centerMap)
        $rootScope.showDetails = ''
        $rootScope.showInfo = ''
      })
    }
  }
})()
