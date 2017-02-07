/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('LocationController', function (BikeFactory, apikey, NgMap) {
	var vm = this 
	vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + apikey

	BikeFactory.urbykeCall()
	.then(function(response) {
		vm.latitude = response.data.network.location.latitude
		vm.longitude = response.data.network.location.longitude
		vm.stations = response.data.network.stations
		console.log(vm.stations[0])
	})





})