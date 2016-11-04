
angular.module('pokemonApp').service('mainService', function($http) {


  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/?limit=720'
  }).then(function(response) {
    // console.log(pokemon);
    var data = response.data.results;
    var pokemon = [];
    for(var i = 0; i < data.length; i++) {
      if(i < 720) {
        var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
        var id = (i+1);
        pokemon.push({
          name: name,
            id:  id,
            img: 'http://www.serebii.net/art/th/' + id + '.png',
            url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/',

          });

      }
    }


    return pokemon;
  });
};


<<<<<<< HEAD
this.gen1 = function() {
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/?limit=151'
  }).then(function(response) {
  console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 152) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+1);
      pokemon.push({
        name: name,
          id:  id,
          img: 'http://www.serebii.net/art/th/' + id + '.png',
          url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};


this.gen2 = function() {
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/?limit=100&offset=151'
  }).then(function(response) {
  console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 152) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+152);
      pokemon.push({
        name: name,
          id:  id,
          img: 'http://www.serebii.net/art/th/' + id + '.png',
          url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};

this.gen3 = function() {
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/?limit=135&offset=251'
  }).then(function(response) {
  console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 135) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+252);
      pokemon.push({
        name: name,
          id:  id,
          img: 'http://www.serebii.net/art/th/' + id + '.png',
          url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};


this.gen4 = function() {
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/?limit=107&offset=386'
  }).then(function(response) {
  console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 107) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+387);
      pokemon.push({
        name: name,
          id:  id,
          img: 'http://www.serebii.net/art/th/' + id + '.png',
          url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};
=======

>>>>>>> 9e59bf4b6d85b7487ab381fbd3772fe5c024d54e


  this.getIndividual = function(id) {
    // console.log(parseInt(id));
      return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/' + id.toLowerCase() + '/'
    }).then(function(response) {
      var newResponse = [];
      var data = response.data;
<<<<<<< HEAD
      data.img = 'http://www.serebii.net/art/th/' + data.id + '.png';
      newResponse.push(data);

      return newResponse[0];
=======
      data.img = 'http://www.serebii.net/art/th/' + id + '.png';
      newResponse.push({data: data});

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
      return newResponse;
>>>>>>> 9e59bf4b6d85b7487ab381fbd3772fe5c024d54e
    });
  };


this.getNext = function(id) {
var nextId = id + 1;
console.log('request hit');
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/' + nextId
  }).then(function(response) {
    console.log(response);
    return response.data;
  });
};

this.getPrev = function(id) {
var nextId = id - 1;
console.log('request hit');
  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/' + nextId
  }).then(function(response) {
    console.log(response);
    return response.data;
  });
};

});

// "http://pokeapi.co/api/v2/pokemon/?limit=50&offset=0";
