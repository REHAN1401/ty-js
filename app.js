angular.module('historicalPlacesApp', [])
    .controller('HistoricalPlacesController', function () {
        var vm = this;

        vm.places = [
            { name: 'Pyramids of Giza', description: 'Ancient Egyptian structures.' },
            { name: 'Great Wall of China', description: 'Long wall built for defense.' },
            { name: 'Colosseum', description: 'Ancient Roman amphitheater.' },
            { name: 'Machu Picchu', description: 'Incan citadel in the Andes.' }
            // Add more historical places here...
        ];

        vm.showDetails = function (place) {
            vm.selectedPlace = place;
        };
    });
