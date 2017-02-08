/* eslint no-undef: "off" */
angular.module('urbykeApp')
.factory('BikeFactory', function ($http) {
  var url = 'http://api.citybik.es/v2/networks/bicing'

  function getBikeStations () {
    return $http.get(url)
    .then(function (response) {
      var stations = response.data.network.stations
      var stationsInfo = stations.map(function (elem) {
        return {
          id: elem.id,
          name: elem.name,
          bikes: elem.free_bikes,
          slots: elem.empty_slots,
          latitude: elem.latitude,
          longitude: elem.longitude
        }
      })
      return stationsInfo
    })
  }

  return {
    getBikeStations: getBikeStations
  }
})
