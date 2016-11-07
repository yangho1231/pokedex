angular.module('pokemonApp').controller('mainCtrl', function($scope, mainService, $stateParams, $state, $route, $anchorScroll, $location) {
  $scope.getUsers = function() {
    mainService.getData().then(function(response) {
      console.log(response);
      $scope.pokemon = response;
    });
  };
  $scope.reloadRoute = function(id) {
      // console.log('hit');
      if($state.current.name === 'home') {
        $location.hash(id);
        $anchorScroll();
      }
      else {
        $state.go('home');
      }
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
