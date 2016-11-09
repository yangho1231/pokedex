angular.module('pokemonApp').directive('pokemonDirective', function() {
  return {
    restrict: 'EA',
    template:`<section class='home-main'> <div id='home-image' class='home-image'> </div><input class='search-box' ng-model='filterName.name' placeholder="Type Here"></input> <select ng-model='sortBy'> <option>------------</option> <option value='name'>A-Z</option> <option value='-name'>Z-A</option> <option value='id'>Lowest Number</option> <option value='-id'>Highest Number</option> </select> <section class='home-intro'> <div ng-repeat="data in pokemon | filter: filterName | orderBy: sortBy"> <div ui-sref='info({id: data.name})' ng-click="getIndividual($index + 1)"> <div class='wrapper'> <img class='img-list' ng-src='{{data.img}}'></img> </div><div id='pokeName'>{{data.name}}</div><div id='pokeId'>#{{data.id}}</div></div></div></section></section>`


    //  'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/home.html',
    // ../../views/home.html
  };

});
