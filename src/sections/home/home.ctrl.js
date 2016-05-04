angular.module('app.core').controller('HomeController',function(){
    var vm = this;   
    vm.firstName = "Nirjal";
    vm.lastName = "Khadka";    
    vm.title = 'Nirjals angular app';
    vm.searchInput = '';
    console.log('nu är vi i home controller');
  
    vm.shows = [
        {
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];
});