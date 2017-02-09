/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('DetailsController', DetailsController)

function DetailsController ($routeParams, BikeFactory) {
  var vm = this
  var idStation = $routeParams.idStation

  BikeFactory.getStationDetails(idStation)
  console.log(idStation)
  vm.stationDetails = station
  console.log('josep')
}
