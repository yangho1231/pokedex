angular.module('pokemonApp').controller('gen5Ctrl', function($scope, mainService, $stateParams, $state) {
  $scope.gen5 = function() {
    mainService.gen5().then(function(response) {
      // console.log(response);
      $scope.pokemon = response;
    });
  };
  $scope.gen5();

  });
