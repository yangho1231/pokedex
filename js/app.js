angular.module('pokemonApp', ['ui.router', 'ngRoute'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/home.html',
      controller: 'mainCtrl'
    })
    .state('info', {
      url: '/info/:id',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/info2.html',
      controller: 'infoCtrl'
    })
    .state('gen1', {
      url: '/gen1',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/gen1.html',
      controller: 'gen1Ctrl'
    })
    .state('gen2', {
      url: '/gen2/',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/gen2.html',
      controller: 'gen2Ctrl'
    })
    .state('gen3', {
      url: '/gen3/',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/gen3.html',
      controller: 'gen3Ctrl'
    })
    .state('gen4', {
      url: '/gen4/',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/gen4.html',
      controller: 'gen4Ctrl'
    })
    .state('gen5', {
      url: '/gen5/',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-pages/views/gen5.html',
      controller: 'gen5Ctrl'
    })
    .state('gen6', {
      url: '/gen6/',
      templateUrl: 'https://raw.githubusercontent.com/yangho1231/pokedex/gh-page/views/gen6.html',
      controller: 'gen6Ctrl'
      // './views/gen6.html',
    });
    $urlRouterProvider
    .otherwise('/');

});
