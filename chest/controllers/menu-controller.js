app.controller("menuCtrl", function($scope, $location) {

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


