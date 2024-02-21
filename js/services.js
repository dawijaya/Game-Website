// Define a value
gameApp.value('appName', 'Game Catalogue');

// Define a constant
gameApp.constant('appVersion', '1.0');

// Define a factory
gameApp.factory('gameFactory', function() {
    var games = [{ name: 'Game 1', genre: 'Action' }, { name: 'Game 2', genre: 'Puzzle' }];
    return {
        getGames: function() {
            return games;
        }
    };
});

// Define a service
gameApp.service('gameService', ['gameFactory', function(gameFactory) {
    this.addGame = function(game) {
        gameFactory.getGames().push(game);
    };
}]);