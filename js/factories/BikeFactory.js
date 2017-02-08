/* eslint no-undef: "off" */
angular.module('urbykeApp')

.factory('BikeFactory', function ($http) {
  var vm = this;
  function getBikeStations() {
  var url = 'http://api.citybik.es/v2/networks/bicing'  
  return $http.get(url)
  .then(function(response){
    vm.stations = response.data.network.stations
    console.log(vm.stations)
    vm.stationsInfo = vm.stations.map(function(elem) {
      return {
      id: elem.id,
      name: elem.name,
      bikes: elem.free_bikes,
      slots: elem.empty_slots, 
      latitude: elem.latitude,
      longitude: elem.longitude
      }
    })
    console.log(vm.stationsInfo)
    return vm.stationsInfo
  })
}

  return {
    getBikeStations: getBikeStations
  }
  
})
