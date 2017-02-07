/* eslint no-undef: "off" */
angular.module('urbykeApp')
    .controller('LocationController', function(BikeFactory, apikey, NgMap, $rootScope) {

    	var latAndLon
        var vm = this
        vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + apikey

        BikeFactory.urbykeCall()
            .then(function(response) {
                vm.latitude = response.data.network.location.latitude
                vm.longitude = response.data.network.location.longitude
                vm.stations = response.data.network.stations
                $rootScope.latAndLon = vm.stations.map(function(elem) {
            	return elem.latitude +", "+ elem.longitude

            })
                // console.log($rootScope.latAndLon)
      
            })
            
    })
