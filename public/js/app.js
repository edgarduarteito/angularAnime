//(function () {
////    definicion  modulo angular 
//    var app = angular.module('anime', ['ngRoute', 'anime.controllers', 'anime.directives','anime.filters','anime.services']);
//
//    app.config(['$routeProvider', function ($routeProvider) {
//            $routeProvider
//                    .when('/', {
//                        templateUrl: 'views/listado.html',
//                        controller: 'PokedexController'
//                    })
//                    .when('/:tipo', {
//                        templateUrl: 'views/listado.html',
//                        controller: 'PokedexController',
//                        
//                    })
//                    .when('/:genero', {
//                        templateUrl: 'views/listado.html',
//                        controller: 'PokedexController',
//                        
//                    })
//                    .when('/anime/:titulo', {
//                        templateUrl: 'views/anime.html',
//                        controller: 'AnimeController',
//                        
//                    })
//                    .otherwise({
//                        redirectTo: '/'
//                    });
//        }]);
//})();
//anime app modificacion

(function () {

  var app = angular.module('anime', [
    'ngRoute',
    'anime.controllers',
    'anime.directives',
    'anime.filters',
    'anime.services'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/listado.html',
        controller: 'PokedexController'
      })
      .when('/:genero', {
        templateUrl: 'views/listado.html',
        controller: 'PokedexController'
      })
      .when('/anime/:titulo', {
        templateUrl: 'views/anime.html',
        controller: 'AnimeController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();

//fin


