gameApp.controller('GameListController', ['$scope', 'gameFactory', 'gameService', 'appName', 'appVersion', function($scope, gameFactory, gameService, appName, appVersion) {
    $scope.appName = appName;
    $scope.appVersion = appVersion;
    $scope.games = gameFactory.getGames();

    $scope.addGame = function() {
        gameService.addGame({ name: $scope.newGameName, genre: $scope.newGameGenre });
        $scope.newGameName = '';
        $scope.newGameGenre = '';
    };
}]);