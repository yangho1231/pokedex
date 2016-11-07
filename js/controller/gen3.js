angular.module('pokemonApp').controller('gen3Ctrl', function($scope, mainService, $stateParams, $state) {
  $scope.gen3 = function() {
    mainService.gen3().then(function(response) {
      // console.log(response);
      $scope.pokemon = response;
    });
  };
  $scope.gen3();

  });
