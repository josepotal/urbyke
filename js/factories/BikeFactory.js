/* eslint no-undef: "off" */
angular.module('urbykeApp')

.factory('BikeFactory', function($http) {
    var vm = this

    function getBikeStations() {
        var url = 'http://api.citybik.es/v2/networks/bicing'
        
        
        function getResults(response) {
          return response.data.network.stations
        }

        function getStations(stations) {
            console.log(stations)
                return stations.map(function(elem) {
                  var stationsInfo = {
                        id: elem.id,
                        name: elem.name,
                        bikes: elem.free_bikes,
                        slots: elem.empty_slots,
                        latitude: elem.latitude,
                        longitude: elem.longitude
                    }
                    return stationsInfo
                })

        }


        return $http.get(url)
            .then(getResults)
            .then(getStations) 
    }

    return {
        getBikeStations: getBikeStations
    }
})
