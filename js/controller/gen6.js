angular.module('pokemonApp').controller('gen6Ctrl', function($scope, mainService, $stateParams, $state) {
  $scope.gen6 = function() {
    mainService.gen6().then(function(response) {
      // console.log(response);
      $scope.pokemon = response;
    });
  };
  $scope.gen6();

  });
