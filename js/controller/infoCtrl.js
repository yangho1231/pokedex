angular.module('pokemonApp').controller('infoCtrl', function($scope, mainService, $stateParams, $state) {
  $scope.getIndividual = function(id, name) {
    console.log(name);
    // $scope.name = $stateParams.name;
    // var id = (Number($stateParams.id) + 1);
    // console.log("id in controller", id);
    console.log("stateparams", $stateParams);
     mainService.getIndividual(id).then(function(response) {
      //  console.log("individual pokemon in controller", response);
        $scope.poke = response;
        console.log($scope.poke, 'From scope object');
        console.log($stateParams);
        $state.go('info');
      });
  };
});
