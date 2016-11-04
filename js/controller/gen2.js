angular.module('pokemonApp').controller('gen2Ctrl', function($scope, mainService, $stateParams, $state) {
  $scope.gen2 = function() {
    mainService.gen2().then(function(response) {
      console.log(response);
      $scope.pokemon = response;
    });
  };
  $scope.gen2();

  });
