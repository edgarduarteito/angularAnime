//definimos los services
//(function () {
//    angular.module('anime.services', [])
//            .factory('animeService', ['$http', '$q', '$filter', function ($http, $q, $filter) {
//                    var normalize = $filter('normalize');
//
//                   function all() {
//                    var deferred = $q.defer();
//
//                    $http.get('animes.json')
//                      .success(function (data) {
//                          console.log(data);
//                        deferred.resolve(data);
//                      });
//
//                    return deferred.promise;
//                  }
//
//
//                    function byTitle(titulo) {
//                        titulo = normalize(titulo);
//                        var deferred = $q.defer();
//                        console.log(deferred);
//                        all().then(function (data) {
//                            var results = data.filter(function (anime) {
//                                return normalize(anime.titulo) === titulo;
//
//                            });
//                            if (results.lenght > 0) {
//                                deferred.resolve(results[0]);
//                            } else {
//                                deferred.reject();
//                            }
//
//                        });
//                        return deferred.promise;
//
//                    }
//                    function byType(tipo) {
//                        tipo = normalize(tipo);
//                        var deferred = $q.defer();
//
//                        all().then(function (data) {
//                            var results = data.filter(function (anime) {
//                                return anime.tipo.some(function (t) {
//                                    return normalize(t) === titulo;
//
//                                });
//
//                            });
//
//                            deferred.resolve(results);
//
//                        });
//                        return deferred.promise;
//
//                    }
//                    function byGenero(genero) {
//                        genero = normalize(genero);
//                        var deferred = $q.defer();
//
//                        all().then(function (data) {
//                            var results = data.filter(function (anime) {
//                                return anime.genero.some(function (g) {
//                                    return normalize(g) === genero;
//
//                                });
//
//                            });
//
//                            deferred.resolve(results);
//
//                        });
//                        return deferred.promise;
//
//                    }
//                    return{
//                        all: all,
//                        byTitle: byTitle,
//                        byType: byType,
//                        byGenero: byGenero
//
//                    };
//
//                }
//            ]);
//
//})();
//adaptamos el service de pokedex a anime
(function () {

    angular.module('anime.services', [])

            .factory('animeService', ['$http', '$q', '$filter', '$window', function ($http, $q, $filter, $window) {
                    //persistir datos
                    var localStorage = $window.localStorage;
                    var normalize = $filter('normalize');

                    function all() {
                        var deferred = $q.defer();

                        $http.get('animes.json')
                                .success(function (data) {
                                    deferred.resolve(data);
                                });

                        return deferred.promise;
                    }


                    function byTitle(titulo) {
                        titulo = normalize(titulo);
                        var deferred = $q.defer();

                        all().then(function (data) {
                            var results = data.filter(function (pokemon) {
                                return normalize(pokemon.titulo) === titulo;
                            });

                            if (results.length > 0) {
                                deferred.resolve(results[0]);
                            } else {
                                deferred.reject();
                            }

                        });

                        return deferred.promise;
                    }

                    function byType(genero) {
                        genero = normalize(genero);
                        var deferred = $q.defer();

                        all().then(function (data) {
                            var results = data.filter(function (pokemon) {
                                return pokemon.genero.some(function (t) {
                                    return normalize(t) === type;
                                });
                            });

                            deferred.resolve(results);
                        });

                        return deferred.promise;
                    }
                    function saveComment(anime, comment) {
                        var comments = getComments(anime);
                        comments.push(comment);
                        localStorage.setItem(anime, JSON.stringify(comments));
                    }
                    function getComments(anime) {
                        var comments = localStorage.getItem(anime);
                        if (!comments) {
                            comments = [];

                        } else {
                            comments = JSON.parse(comments);
                        }
                        return comments;
                    }

                    return {
                        all: all,
                        byTitle: byTitle,
                        byType: byType,
                        saveComment: saveComment,
                        getComments: getComments
                    };

                }]);

})();


//FIN ADAPTACION///


