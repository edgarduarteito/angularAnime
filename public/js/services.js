//definimos los services
(function () {
    angular.module('anime.services', [])
            .factory('AnimeService', ['$http', '$q', function ($http, $q) {
                    function all() {
                        var deferred = $q.defer();
                        $http.get('animes.json')
                                .success(function (data) {
                                    deferred.resolve(data);
                                });
                        return deferred.promise;
                    }
                    return{all: all}

                }
            ]);

})();


