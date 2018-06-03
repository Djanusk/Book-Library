function MyBooksController($scope, $http) {
    console.log("Hello from MyBooks Controller!");

    var get_books = function (){
        $http.get('/rest/v1/books').then(function(response){
          $scope.books = response.data;
        }),function(response){
          alert(response.status);
        }
    };
}