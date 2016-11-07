angular.module('pokemonApp').directive('headerDirective', function() {
  return {
    restrict: 'EA',
    controller: 'mainCtrl',
    templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-page/views/header.html'
    // '../../views/header.html'

  };

});
