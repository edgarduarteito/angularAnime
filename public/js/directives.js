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
//    .directive('animeComentario', function () {
//        return{
//            restrict: 'E',
//            templateUrl: 'partials/anime-comentario.html',
//            controller: function () {
//                this.comments = [];
//                this.comment = {};
//                this.show = false;
//                this.toggle = function () {
//                    this.show = !this.show;
//
//                };
//                this.anonymousChanged = function () {
//                    if (this.comment.anonymous) {
//                        this.comment.email = "";
//                    }
//                };
//                this.addComment = function () {
//                    this.comment.date = Date.now();
//                    this.comments.push(this.comment);
//                    this.comment = {};
//                };
//
//            },
//            controllerAs: 'cmtsCtrl'
//
//        };
//    })
    .directive('animeComentario', ['animeService', function (animeService) {
      return {
        restrict: 'E',
        templateUrl: 'partials/anime-comentario.html',
        scope: {
          name: '@name'
        },
        link: function (scope, element, attributes) {
          attributes.$observe('name', function (value) {
            if (value) {
              scope.name = value;
              scope.comments = animeService.getComments(value);
            }
          });
        },
        controller: function ($scope) {
          $scope.comments = animeService.getComments($scope.name);
          $scope.comment = {};
          $scope.show = false;

          $scope.toggle = function () {
            $scope.show = !$scope.show;
          };

          $scope.anonymousChanged = function () {
            if ($scope.comment.anonymous) {
              $scope.comment.email = "";
            }
          };

          $scope.addComment = function () {
            $scope.comment.date = Date.now();
            animeService.saveComment($scope.name, $scope.comment);
            $scope.comments = animeService.getComments($scope.name);
            $scope.comment = {};
          };

        }
      };
    }])
    .directive('animeGenero', function () {
        return{
            restrict: 'A',
            templateUrl: 'partials/anime-genero.html'

        };
    });

    
})();
//modificando directiva pokemon a anime

//fin modifico
