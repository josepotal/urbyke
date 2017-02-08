/* eslint no-undef: "off" */
angular.module('urbykeApp')

.factory('BikeFactory', function ($http) {
  var vm = this;
  function getBikeStations() {
  var url = 'http://api.citybik.es/v2/networks/bicing'  
  return $http.get(url)
  .then(function(response){
    vm.stations = response.data.network.stations[0]
    console.log(vm.stations)
    vm.stationsInfo = {
      id: vm.stations.id,
      name: vm.stations.name,
      bikes: vm.stations.free_bikes,
      slots: vm.stations.empty_slots, 
      latitude: vm.stations.latitude,
      longitude: vm.stations.longitude
    }
    console.log(vm.stationsInfo)
    return vm.stationsInfo
  })
}

  return {
    getBikeStations: getBikeStations
  }
})
