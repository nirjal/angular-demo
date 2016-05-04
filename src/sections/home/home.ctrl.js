angular.module('app.core').controller('HomeController',function(MyService){
    var vm = this;   
    vm.shows = MyService.getShows();    
});