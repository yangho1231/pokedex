angular.module('pokemonApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'mainCtrl'
    })
    .state('info', {
      url: '/info/:id',
      templateUrl: './views/info.html',
      controller: 'infoCtrl'
    })
    .state('gen1', {
      url: '/gen1',
      templateUrl: './views/gen1.html',
      controller: 'gen1Ctrl'
    })
    .state('gen2', {
      url: '/gen2/',
      templateUrl: './views/gen2.html',
      controller: 'gen2Ctrl'
    })
    .state('gen3', {
      url: '/gen3/',
      templateUrl: './views/gen3.html',
      controller: 'gen3Ctrl'
    })
    .state('gen4', {
      url: '/gen4/',
      templateUrl: './views/gen4.html',
      controller: 'gen4Ctrl'
    })
    $urlRouterProvider
    .otherwise('/');

});
