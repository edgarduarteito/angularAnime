(function (){
    angular.module('anime.directives',[])
    // creacion de nuestras propias directivas
    .directive('animeData', function () {
        return{
            restrict: 'E',
            templateUrl: 'partials/anime-data.html'

        };
    })
    .directive('animeDescripcion', function () {
        return{
            restrict: 'E',
            templateUrl: 'partials/anime-descripcion.html'

        };
    })
    .directive('animeComentario', function () {
        return{
            restrict: 'E',
            templateUrl: 'partials/anime-comentario.html',
            controller: function () {
                this.comments = [];
                this.comment = {};
                this.show = false;
                this.toggle = function () {
                    this.show = !this.show;

                };
                this.anonymousChanged = function () {
                    if (this.comment.anonymous) {
                        this.comment.email = "";
                    }
                };
                this.addComment = function () {
                    this.comment.date = Date.now();
                    this.comments.push(this.comment);
                    this.comment = {};
                };

            },
            controllerAs: 'cmtsCtrl'

        };
    })
    .directive('animeGenero', function () {
        return{
            restrict: 'A',
            templateUrl: 'partials/anime-genero.html'

        };
    });

    
})();

