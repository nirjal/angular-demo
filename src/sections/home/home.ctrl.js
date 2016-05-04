angular.module('app.core').controller('HomeController',function(MyService){
    var vm = this;   
    vm.firstName = "Nirjal";
    vm.lastName = "Khadka";    
    vm.title = 'Nirjals angular app';
    vm.searchInput = '';
    console.log('nu är vi i home controller');
    
    vm.data = MyService.getData();
    console.log(vm.data );
  
    
});