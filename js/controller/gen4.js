angular.module('pokemonApp').controller('gen4Ctrl', function($scope, mainService, $stateParams, $state) {
  $scope.gen4 = function() {
    mainService.gen4().then(function(response) {
      // console.log(response);
      $scope.pokemon = response;
    });
  };
  $scope.gen4();

  });
