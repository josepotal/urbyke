/* eslint no-undef: "off" */
(function() {
    
    angular
        .module('urbykeApp')
        .controller('DetailsStationController', DetailsStationController);

    function DetailsStationController($rootScope, $routeParams, BikeFactory) {
        var vm = this;
        var idStation = $routeParams.idStation;

        BikeFactory.getStationDetails(idStation)
            .then(function(response) {
                vm.details = response;
                
                var centerMap = response[0].latitude + ',' + response[0].longitude;
                $rootScope.$broadcast('centerSelectStation', centerMap);
            });
      }
})();
