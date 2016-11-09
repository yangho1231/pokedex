angular.module('pokemonApp').directive('infoDirective', function() {
  return {
    restrict: 'EA',
    template: `<div class='infoPage'> <button class="previous" ng-disabled='poke.id===1' ng-click='getPrev(poke.id)' ui-sref='info({id: poke.id -1})'>Previous</button> <button class="next" ng-disabled='poke.id===720' ui-sref='info({id: poke.id + 1})'>Next</button> <div class='wrapTwo'> <img class='test' ng-src="{{poke.img}}"></img> <div class='infoBox'> <img class='smallImage' ng-src="{{poke.sprites.front_default}}"></img> <div class='property'> <div class='propName'>Name:</div><div class='propName'>Height:</div><div class='propName'>Weigth:</div><div class='propName'>Type:</div></div><div class='value'> <div class='valueInside'>{{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}}</div><div class='valueInside'>{{poke.height}}Inch</div><div class='valueInside'>{{poke.weight}}lbs</div><div class='valueInside'>{{poke.types[0].type.name.charAt(0).toUpperCase() + poke.types[0].type.name.slice(1)}}{{poke.types[1].type.name.charAt(0).toUpperCase() + poke.types[1].type.name.slice(1)}}{{poke.types[2].type.name.charAt(0).toUpperCase() + poke.types[2].type.name.slice(1)}}</div></div></div></div></div>`,

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
        $('.infoBox').on('mouseover', function() {

          $('.infoBox').animate({height: '400px', width: '700px'});
        });

        $('.infoBox').on('mouseleave', function() {
          $('.infoBox').animate({height: '300px', width: '600px'});
        });
    }
  };

});
