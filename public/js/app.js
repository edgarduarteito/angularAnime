(function () {
//    definicion  modulo angular 
    var app = angular.module('anime', ['ngRoute', 'anime.controllers', 'anime.directives','anime.services']);

    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/listado.html',
                        controller: 'PokedexController'
                    })
                    .when('/anime/:id', {
                        templateUrl: 'views/anime.html',
                        controller: 'AnimeController',
                        controllerAs: 'anmCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        }]);
})();


