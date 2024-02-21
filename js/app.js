// Define the `gameApp` module
var gameApp = angular.module('gameApp', ['ngRoute']);

// Configure our routes
gameApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/games', {
            templateUrl: 'partials/gameList.html',
            controller: 'GameListController'
        })
        .otherwise({
            redirectTo: '/games'
        });
}]);