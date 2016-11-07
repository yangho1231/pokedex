angular.module('pokemonApp').directive('infoDirective', function() {
  return {
    restrict: 'EA',
    templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-page/views/info.html',
    // ../../views/info.html;
    link: function(scope, element, attributes) {
      //   element.on('click', function() {
      //     console.log($('.infoBox').height());
      //     if($('.infoBox').height() !== '300') {
      //     $('.infoBox').animate({height: '500px'});
      //   }
      //     else if($('.infoBox').height() === '500'){
      //     $('.infoBox').animate({height: '300px'});
      //   }
      // });
        $('.infoBox').on('mouseenter', function() {
          $('.infoBox').animate({height: '500px'});
        });

        $('.infoBox').on('mouseleave', function() {
          $('.infoBox').animate({height: '300px'});
        });
    }
  };

});
