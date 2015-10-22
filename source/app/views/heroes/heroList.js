var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var heroes_data_1 = require('./heroes.data');
var heroComponents_1 = require('./heroComponents');
var HeroComponent = (function () {
    function HeroComponent(dataService) {
        this.dataService = dataService;
        this.heroes = dataService.getList();
    }
    HeroComponent = __decorate([
        router_1.RouteConfig([
            { path: '/', component: heroComponents_1.HeroCreatorComponent, as: 'Home' },
            { path: '/:id', component: heroComponents_1.HeroEditorComponent, as: 'Detail' },
        ]),
        angular2_1.Component({
            selector: 'hero-list',
            providers: [heroes_data_1.HeroesDataService],
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, heroComponents_1.HeroComponents, router_1.RouterOutlet],
            templateUrl: 'source/app/views/heroes/heroList.html',
            styles: ["\n        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n    "],
        }), 
        __metadata('design:paramtypes', [heroes_data_1.HeroesDataService])
    ], HeroComponent);
    return HeroComponent;
})();
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=heroList.js.map