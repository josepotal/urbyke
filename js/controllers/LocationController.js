/* eslint no-undef: "off" */
(function () {
    'use strict';

    angular
        .module('urbykeApp')
        .controller('LocationController', LocationController);

    function LocationController ($scope, BikeFactory, NgMap) {
    
        var vm = this;
        vm.centerMap = 'current-position';

        BikeFactory.getBikeStations()
            .then(function (response) {
                vm.allStationsInfo = response;
            });

        //listens from the detailsController.js
        $scope.$on('centerSelectStation', getPosition);
            function getPosition(event, centerMap) {
                vm.centerMap = centerMap;
            }
    }

})();
