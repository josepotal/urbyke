/* eslint no-undef: "off" */
angular.module('urbykeApp')
.factory('BikeFactory', function ($http, apikey) {
  
  function urbykeCall() {
  	var url = "http://api.citybik.es/v2/networks/bicing"
  	return $http.get(url)
  }
  return {
  	urbykeCall : urbykeCall
  }
  
})
