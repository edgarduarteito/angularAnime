(function (){
    angular.module('anime.controllers',[])
      .controller('PokedexController', ['$scope', 'AnimeService', function ($scope, $AnimeService) {
      $scope.pokemons = [];

      $http.get('animes.json')
        .success(function (data) {
          $scope.pokemons = data;
        });
    }])
            .controller('AnimeController',['$scope', function ($scope) {
        $scope.anime = {
            id:'01',
            titulo: 'NARUTO SHIPPUDEN',
            imagen:'naruto',
            tipo: 'Serie',
            genero: ['Super Poderes', 'Shounen', 'Artes Marciales', 'Comedia', 'Accion'],
            estado: 'En emision',
            descripcion: 'Pasan dos años después de que Naruto y Sakura se fueran \n\
a entrenar cada uno con su maestro sannin, en este caso, Naruto se fue con Jiraya y Sakura con Tsunade. \n\
Ya tienen 14 años y son unos geniales ninjas, \n\
Naruto ha aprendido muchas técnicas nuevas y ha perfeccionado el Kage Bunshin \n\
aparte de otras que ya las verán a lo largo de la serie, más una técnica secreta. \n\
Sakura ha aprendido todo sobre la medicina ninja, y se ha convertido en una ninja médico.\n\
 Los otros personajes sin olvidarlos, también han evolucionado subiendo de rango de ninja (todos menos Naruto)\n\
 y también los temas amorosos, Shikamaru ya tiene novia. Pero durante esos 2 años,\n\
 los Akatsuki se han preparado para lo que viene. \n\
Empiezan a mover ficha yendo a buscar a los 9 demonios de chakra legendario \n\
(Kyubi, Shukaku de la arena y siete más).',
            episodios: ['1', '2', '3', '4', '5', '6', '390', '391']


        };

    }])
    .controller('TabsController', function () {
        this.tab = 1;
        this.selectTab = function (tab) {
            this.tab = tab;

        };

    });
    
})();

