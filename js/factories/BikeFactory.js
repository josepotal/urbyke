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

.factory('SearchFactory', function ($http) {
  var vm = this
  console.log('SearchFactory in construction...')
  function searchStation () {
    var url = 'http://api.citybik.es/v2/networks/bicing'
    return $http.get(url)
    .then(function (response) {
      console.log(response)
      vm.stationName = response.map(function (elem) {
        return {
          name: elem.name,
          id: elem.id
        }
      })
      console.log(vm.stationName)
      return vm.stationName
    })
  }

  return {
    searchStation: searchStation
  }
})
