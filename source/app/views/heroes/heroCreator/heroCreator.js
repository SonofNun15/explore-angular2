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
var heroes_data_1 = require('../heroes.data');
var HeroCreatorComponent = (function () {
    function HeroCreatorComponent(dataService) {
        this.dataService = dataService;
        this.create = new angular2_1.EventEmitter();
        this.hero = {
            id: dataService.getNextId(),
            name: '',
        };
    }
    HeroCreatorComponent.prototype.save = function () {
        this.dataService.create(this.hero);
        this.create.next(this.hero);
    };
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], HeroCreatorComponent.prototype, "create");
    HeroCreatorComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-creator',
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES],
            template: "\n        <div>\n            <label>Id:</label>\n            <span>{{hero.id}}</span>\n        </div>\n        <div>\n            <label>Name: </label>\n            <input [(ng-model)]=\"hero.name\" placeholder=\"name\"></input>\n        </div>\n        <button (click)=\"save()\">Save</button>\n    ",
        }), 
        __metadata('design:paramtypes', [heroes_data_1.HeroesDataService])
    ], HeroCreatorComponent);
    return HeroCreatorComponent;
})();
exports.HeroCreatorComponent = HeroCreatorComponent;
//# sourceMappingURL=heroCreator.js.map