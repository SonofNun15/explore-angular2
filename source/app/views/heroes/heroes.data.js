var _ = require('lodash');
var HeroesDataService = (function () {
    function HeroesDataService() {
    }
    HeroesDataService.prototype.get = function (id) {
        return _.find(HEROES, function (x) { return id == x.id; });
    };
    HeroesDataService.prototype.getList = function () {
        return HEROES;
    };
    HeroesDataService.prototype.create = function (hero) {
        return new Promise(function (resolve) {
            HEROES.push(hero);
            resolve(HEROES);
        });
    };
    HeroesDataService.prototype.getNextId = function () {
        var lastHero = _.max(HEROES, function (x) { return x.id; });
        return lastHero.id + 1;
    };
    return HeroesDataService;
})();
exports.HeroesDataService = HeroesDataService;
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
//# sourceMappingURL=heroes.data.js.map