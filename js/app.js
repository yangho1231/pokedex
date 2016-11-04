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
    });
    $urlRouterProvider
    .otherwise('/');

});
