app.controller("menuCtrl", function($scope, $location) {

    $scope.login = function(credentials){
        $http({
            url: '/rest/v1/login',
            method: "POST",
            data: credentials
        }).then(function(response){
            if(response.data == true){
                $scope.myLogin = true;
            }else{
                $scope.myLogin = false;
            }
        }, function(error){
            console.log(error);
        });
    }

    $scope.logout = function() {
        $scope.myLogin = false;
    }
    
    $scope.login = function() {
        $scope.myLogin = true;
    }

    /*$scope.register = function() {
        $scope.myReg = true;
    }

    $scope.registered = function() {
        $scope.myReg = false;
    }*/

    $scope.getClass = function(path) {
        if(path == "/home" && $location.path() == "/") return "active";
        return ($location.path() === path) ? "active" : "";
    }
    })

    app.run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
    });
}]);


