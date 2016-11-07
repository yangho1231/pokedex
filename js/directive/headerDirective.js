angular.module('pokemonApp').directive('headerDirective', function() {
  return {
    restrict: 'EA',
    controller: 'mainCtrl',
    template: '<header><nav class="navbar navbar-default navbar-fixed-bottom"><ul><div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#togglemenu" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div><div class="collapse navbar-collapse" id="togglemenu"> <ul class="nav navbar-nav navbar-left"> <li><a ui-sref="home" ng-click="reloadRoute("home-image")">Home</a></li><li><a ui-sref="gen1">Gen 1</a></li><li><a ui-sref="gen2">Gen 2</a></li><li><a ui-sref="gen3">Gen 3</a></li><li><a ui-sref="gen4">Gen 4</a></li><li><a ui-sref="gen5">Gen 5</a></li><li><a ui-sref="gen6">Gen 6</a></li></ul> </div></div></ul> </nav> </nav> </header>',
        // '../../views/header.html'

  };

});
