angular.module('app.services').factory('MyService', userService);


function userService($http) {
    var fac = {};
    var data = [
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
    fac.getShows = function () {
         return $http({
            'url': 'https://randomuser.me/api' ,
            'method':'get',
            'headers':{
                'Content-type':'application/json'
                },             
            'cache':true
        }).then(function(response){
           console.log(response);
            return response;
        }); 
    }
    return fac;
};