/* eslint no-undef: "off" */
angular.module('urbykeApp')

.factory('BikeFactory', function ($http) {
  function getBikeStations () {
    var url = 'http://api.citybik.es/v2/networks/bicing'

    function getResults (response) {
      return response.data.network.stations
    }

    function getStations (stations) {
      return stations.map(function (elem) {
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

  function getStationDetails (idStation) {
    return getBikeStations()
            .then(function (stations) {
              return stations.filter(function (station) {
                return station.id === idStation
              })
            })
  }

  return {
    getBikeStations: getBikeStations,
    getStationDetails: getStationDetails
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
