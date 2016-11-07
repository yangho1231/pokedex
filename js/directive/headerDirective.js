angular.module('pokemonApp').directive('headerDirective', function() {
  return {
    restrict: 'EA',
    controller: 'mainCtrl',
    templateUrl: '../../views/header.html'

  };

});
