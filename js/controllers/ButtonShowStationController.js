/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('ButtonShowStationController', function ($rootScope) {
  $rootScope.showDetails = ''
  $rootScope.showInfo = ''
  $rootScope.moreStations = function () {
    $rootScope.showDetails = ($rootScope.showDetails === 'top-reset') ? '' : 'top-reset'
    $rootScope.showInfo = ($rootScope.showInfo === 'show-info') ? '' : 'show-info'
  }
})
})()
