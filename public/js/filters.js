(function (){
    angular.module('anime.filters',[]);
    //    definicion de un controlador en angular
   
    app.controller('CommentsController', function () {
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

    });
    

    
})();

