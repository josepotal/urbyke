/* eslint no-undef: "off" */
(function () {
  angular.module('urbykeApp')
.controller('ButtonShowStationController', function ($rootScope) {
  $rootScope.showDetails = ''
  $rootScope.showInfo = ''
  $rootScope.toggle = false
  $rootScope.toggleText = 'More Stations'
  $rootScope.moreStations = function () {
    $rootScope.showDetails = ($rootScope.showDetails === 'top-reset') ? '' : 'top-reset'
    $rootScope.showInfo = ($rootScope.showInfo === 'show-info') ? '' : 'show-info'
    $rootScope.toggleText = $rootScope.toggle ? 'More Stations' : 'Show Map' 
    $rootScope.toggle = !$rootScope.toggle    
  }
})
})()
