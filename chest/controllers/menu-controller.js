app.controller("menuCtrl", function($scope, $location) {

    $scope.login = function() {
        $scope.myLogin = true;
    }

    $scope.logout = function() {
        $scope.myLogin = false;
    }

    $scope.register = function() {
        $scope.myReg = true;
    }

    $scope.registered = function() {
        $scope.myReg = false;
    }

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


