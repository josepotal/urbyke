/* eslint no-undef: "off" */
angular.module('urbykeApp')

.controller('LocationController', function($rootScope, SearchFactory, BikeFactory, NgMap) {
    var vm = this

    console.log("step-1")

    // NgMap.getMap()
    //   .then(function(map) {
    //       var map = map

    //       console.log(map.getCenter())
    //       console.log('markers', map.markers)
    //       console.log('shapes', map.shapes)
    //   })

    BikeFactory.getBikeStations()
        .then(function(response) {
          console.log("step-3")
            vm.allStationsInfo = response
                // console.log(vm.allStationsInfo)
        })


})

.controller('SearchLocationController', function($rootScope, SearchFactory, BikeFactory, NgMap) {

    console.log('SearchLocationController...')
    searchFactory.searchStation()
        .then(function(response) {
            vm.stationSearch = response
            console.log(vm.stationSearch)
            $rootScope.bikes = response;
        })



})

