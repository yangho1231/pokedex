angular.module('pokemonApp').service('mainService', function($http) {


  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/?limit=151'
  }).then(function(response) {
    // console.log(response);
    var data = response.data.results;
    var pokemon = [];
    for(var i = 0; i < data.length; i++) {
      if(i < 151) {
        var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
        var id = (i+1);
        pokemon.push({
          name: name,
            id: '#' + id,
            img: 'http://www.serebii.net/art/th/' + id + '.png',
            url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/'
          });

      }
    }


    return pokemon;
  });
};

  this.getIndividual = function(id) {
    // console.log(parseInt(id));
      return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/'
    }).then(function(response) {
      var newResponse = [];
      var data = response.data;



      // for(var i = 0; i < data.length; i++) {
      //   while(i < 150) {
      //     var id = (i+1);
      //     newResponse.push({
      //       img: 'http://www.serebii.net/art/th/' + id + '.png',
      //
      //     }, data);
      //     console.log(newResponse, "this is newResponse");
      //   }
      // }
      return data;
    });
  };



});

// "http://pokeapi.co/api/v2/pokemon/?limit=50&offset=0";
