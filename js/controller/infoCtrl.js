angular.module('pokemonApp').controller('infoCtrl', function($scope, mainService, $stateParams, $state) {
  $scope.getIndividual = function(id) {
    // $scope.name = $stateParams.name;
    // var id = (Number($stateParams.id) + 1);
    // console.log("id in controller", id);

     mainService.getIndividual(id).then(function(response) {
      //  console.log("individual pokemon in controller", response);
        $scope.poke = response;
        console.log($scope.poke, 'From scope object');
        console.log($stateParams);
        $state.go('info');
      });

  };
<<<<<<< HEAD
  // console.log("stateparams", $stateParams);

  $scope.getNext = function(id) {
    mainService.getNext(id).then(function(response) {
    
    });
  };
  $scope.Prev = function(id) {
    mainService.getNext(id).then(function(response) {
      $scope.nexto = response;
    });
  };

  $scope.getIndividual($stateParams.id);
=======

>>>>>>> 9e59bf4b6d85b7487ab381fbd3772fe5c024d54e
});





// $scope.currentPage = 1;
// $scope.maxPages = 2;
//
// $scope.getUsers = function() {
//     var promise = mainService.getUsers($scope.currentPage);
//   promise.then(function(response){
//       $scope.users = response.data.data;
//       $scope.maxPages = response.data.total_pages;
//   })
// }
//
//
// $scope.getUsers();
//
// $scope.prev = function(){
//   if($scope.currentPage > 1){
//    $scope.currentPage--;
//    $scope.getUsers();
//   }
// }
//
// $scope.next = function(){
//   if($scope.currentPage < $scope.maxPages){
//     $scope.currentPage++;
//     $scope.getUsers();
//   }
// }

// });
