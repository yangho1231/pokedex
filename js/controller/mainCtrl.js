angular.module('pokemonApp').controller('mainCtrl', function($scope, mainService, $stateParams, $state, $route, $anchorScroll, $location) {
  $scope.getUsers = function() {
    mainService.getData().then(function(response) {
      // console.log(response);
      $scope.pokemon = response;
    });
  };

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  };

  $scope.getUsers();




// $scope.getIndividual();
  // $scope.getIndividual = function(url) {
  //   mainService.getIndividual(url).then(function(response) {
  //     $scope.poke = response;
  //     console.log($scope.poke);
  //   });
  // };
  //
  // $scope.getIndividual();
});
