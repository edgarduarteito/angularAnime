(function () {

    angular.module('anime.filters', [])
            .filter('normalize', function () {
                return function (input) {
                    if (!input)
                        return "";

                    input = input
//                  .replace('♀', 'f')
//                  .replace('♂', 'm')
                            .replace(/\W+/g, "");
                    return input.toLowerCase();
                };
            })
            .filter('link', function () {
                return function (input) {
                    if (!input)
                        return "";

                    input = input
                            .replace(" ", "-")
                  
                    return input.toLowerCase();
                };
            })

            .filter('imageify', ['$filter', function ($filter) {
                    return function (input) {
                        var url = "images" + $filter('normalize')(input) + ".jpg";
                        return url;
                    };
                }]);

})();


