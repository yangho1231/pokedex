
angular.module('pokemonApp').service('mainService', function($http) {


  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/?limit=720'
  }).then(function(response) {
    console.log(response);
    var data = response.data.results;
    var pokemon = [];
    for(var i = 0; i < data.length; i++) {
      if(i < 720) {
        var id = (i+1);
        var str = id.toString();
        var ans = ('000'+str).substring(str.length);
        var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);

        pokemon.push({
          name: name,
            id:  id,
            img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png',
            url: 'https://pokeapi.co/api/v2/pokemon/' + id + '/',

          });

      }
    }


    return pokemon;
  });
};


this.gen1 = function() {
  return $http({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=151'
  }).then(function(response) {
  // console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 152) {
      var id = (i+1);
      var str = id.toString();
      var ans = ('000'+str).substring(str.length);
      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);


      pokemon.push({
        name: name,
          id: id,
          img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png',
          url: 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};


this.gen2 = function() {
  return $http({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=151'
  }).then(function(response) {
  // console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 152) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+152);
      var str = id.toString();
      var ans = ('000'+str).substring(str.length);
      pokemon.push({
        name: name,
          id:  id,
          img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png',
          url: 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};

this.gen3 = function() {
  return $http({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=135&offset=251'
  }).then(function(response) {
  // console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 135) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+252);
      var str = id.toString();
      var ans = ('000'+str).substring(str.length);
      pokemon.push({
        name: name,
          id:  id,
          img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png',
          url: 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};


this.gen4 = function() {
  return $http({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=107&offset=386'
  }).then(function(response) {
  // console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 107) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+387);
      var str = id.toString();
      var ans = ('000'+str).substring(str.length);
      pokemon.push({
        name: name,
          id:  id,
          img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png',
          url: 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};

this.gen5 = function() {
  return $http({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=156&offset=493'
  }).then(function(response) {
  // console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 156) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+494);
      var str = id.toString();
      var ans = ('000'+str).substring(str.length);
      pokemon.push({
        name: name,
          id: id,
          img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png',
          url: 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
        });
    }
  }
  return pokemon;
  });
};

this.gen6 = function() {
  return $http({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=71&offset=649'
  }).then(function(response) {
  // console.log(response);

  var data = response.data.results;
  var pokemon = [];

  for(var i = 0; i < data.length; i++) {
    if(i < 71) {

      var name = data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1);
      var id = (i+650);
      var str = id.toString();
      var ans = ('000'+str).substring(str.length);
      pokemon.push({
        name: name,
          id:  id,
          img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png',
          url: 'https://pokeapi.co/api/v2/pokemon/' + id + '/'
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
      url: 'https://pokeapi.co/api/v2/pokemon/' + id.toLowerCase() + '/'
    }).then(function(response) {console.log(response);
      var newResponse = [];
      var str = response.data.id.toString();
      var ans = ('000'+str).substring(str.length);
      var data = response.data;
      console.log(response);
      var idPlus = id++;
      // data.img = 'http://www.serebii.net/art/th/' + data.id + '.png';
      data.img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'  + ans +'.png';
      // data.url = function(){
      //
      //       return $http({
      //         method: 'GET',
      //         url: 'http://pokeapi.co/api/vw/pokemon/'
      //       });
      //   };

      newResponse.push(data);
      return newResponse[0];
    });
  };

this.getNextName = function() {
  var id = 1;
  return $http({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/' + id
  }).then(function(response) {
    // console.log(response);
    var data = response;
    // var nextPokemon = [];
    // //
    // for(var i = 1; i < data.length; i++) {
    //
    //   var name = data[i].name;
    //   if (i < 100) {
    //     nextPokemon.push({
    //       name: name
    //     });
    //   }
    // }
    return data;
  });
};
// this.getNext = function(id) {
// var nextId = id + 1;
// console.log('request hit');
//   return $http({
//     method: 'GET',
//     url: 'http://pokeapi.co/api/v2/pokemon/' + nextId
//   }).then(function(response) {
//     console.log(response);
//     return response.data;
//   });
// };
//
// this.getPrev = function(id) {
// var nextId = id - 1;
// console.log('request hit');
//   return $http({
//     method: 'GET',
//     url: 'http://pokeapi.co/api/v2/pokemon/' + nextId
//   }).then(function(response) {
//     console.log(response);
//     return response.data;
//   });
// };

});

// "http://pokeapi.co/api/v2/pokemon/?limit=50&offset=0";
