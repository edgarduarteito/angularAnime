(function () {
    angular.module('anime.controllers', [])
            .controller('PokedexController', ['$scope', '$routeParams', 'animeService', function ($scope, $routeParams, animeService) {
                    var tipo = $routeParams.tipo;
                    var genero = $routeParams.genero;
                    $scope.pokemons;
                    if (tipo) {
                        animeService.byType(tipo).then(function (data) {
                            $scope.pokemons = data;
                        });
                    }
                    if (genero) {
                        animeService.byGenero(genero).then(function (data) {
                            $scope.pokemons = data;
                        });
                    } else {
                        animeService.all().then(function (data) {
                            $scope.pokemons = data;
                        });
                    }


                }])

            .controller('AnimeController', ['$scope', '$routeParams', 'animeService', function ($scope, $routeParams, animeService) {
                    var titulo = $routeParams.titulo;
                    $scope.anime = {};

                    animeService.byTitle(titulo)
                            .then(function (data) {
                                $scope.anime = data;
                            });
                }])
            .controller('TabsController', function () {
                this.tab = 1;
                this.selectTab = function (tab) {
                    this.tab = tab;

                };

            });

})();

