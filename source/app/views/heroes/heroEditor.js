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
var heroes_data_1 = require('./heroes.data');
var router_1 = require('angular2/router');
var HeroEditorComponent = (function () {
    function HeroEditorComponent(params, dataService) {
        var id = parseInt(params.get('id'), 10);
        this.hero = dataService.get(id);
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], HeroEditorComponent.prototype, "hero");
    HeroEditorComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-editor',
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES],
            template: "\n        <h2>{{hero.name}} details!</h2>\n        <div><label>Id:</label> {{hero.id}}</div>\n        <div>\n            <label>name: </label>\n            <input [(ng-model)]=\"hero.name\" placeholder=\"name\"></input>\n        </div>\n    ",
            styles: ["\n    "],
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, heroes_data_1.HeroesDataService])
    ], HeroEditorComponent);
    return HeroEditorComponent;
})();
exports.HeroEditorComponent = HeroEditorComponent;
//# sourceMappingURL=heroEditor.js.map