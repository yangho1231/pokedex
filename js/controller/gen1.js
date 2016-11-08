angular.module('pokemonApp').controller('gen1Ctrl', function($scope, mainService, $stateParams, $state, $route) {
  $scope.gen1 = function() {
    mainService.gen1().then(function(response) {
      // console.log(response);
      $scope.pokemon = response;
    });
  };


  $scope.gen1();

  });
