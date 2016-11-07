angular.module('pokemonApp').directive('infoDirective', function() {
  return {
    restrict: 'EA',
    template: `<div class='infoPage'> <button class="previous"ng-disabled='poke.id===1' ng-click='getPrev(poke.id)' ui-sref='info({id: poke.id -1})'>Previous</button> <button class="next" ui-sref='info({id: poke.id + 1})'>Next</button><div class='wrapTwo'> <img class='test' ng-src="{{poke.img}}"></img> <div class='infoBox'> <img class='smallImage' ng-src="{{poke.sprites.front_default}}"></img> <div class='infoName'> <div><span class='property'>Name:</span><span class='value'>{{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}}</span></div><div><span class='property'>Height:</span><span class='value'>{{poke.height}}Inch</span></div><div><span class='property'>Weigth:</span><span class='value'>{{poke.weight}}lbs</span></div><span class='property'>Type:</span> <span class='value'>{{poke.types[0].type.name.charAt(0).toUpperCase() + poke.types[0].type.name.slice(1)}}</span> <span class='value'>{{poke.types[1].type.name.charAt(0).toUpperCase() + poke.types[1].type.name.slice(1)}}</span> <span class='value'>{{poke.types[2].type.name.charAt(0).toUpperCase() + poke.types[2].type.name.slice(1)}}</span> </div></div></div>`,
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
