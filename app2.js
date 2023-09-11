angular.module('historicalPlacesApp',[])
.controller('HistoricalPlacesController',function(){
    var vm=this;
    vm.places=[
        {name:'hiiiii',description:'egypt'},
        {name:'byeeeee',description:'hell'},
    ];
    vm.showDetails=function(place){
        vm.selectedPlace=place;
    }
});