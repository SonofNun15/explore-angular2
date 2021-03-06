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
var HeroDisplayComponent = (function () {
    function HeroDisplayComponent() {
        this.select = new angular2_1.EventEmitter();
    }
    HeroDisplayComponent.prototype.onSelect = function () {
        this.selected = !this.selected;
        this.select.next(this.selected);
    };
    HeroDisplayComponent.prototype.getSelectedClass = function () {
        return { 'selected': this.selected };
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], HeroDisplayComponent.prototype, "hero");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Boolean)
    ], HeroDisplayComponent.prototype, "selected");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', angular2_1.EventEmitter)
    ], HeroDisplayComponent.prototype, "select");
    HeroDisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'hero-item',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.RouterLink],
            template: "\n        <li [ng-class]=\"getSelectedClass()\" (click)=\"onSelect()\">\n            <a [router-link]=\"['./Detail', {id: hero.id}]\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </a>\n        </li>\n    ",
            styles: ["\n        li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n        li:hover {color: #369; background-color: #EEE; left: .2em;}\n        li .badge {\n            font-size: small;\n            color: white;\n            padding: 0.1em 0.7em;\n            background-color: #369;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -1px;\n        }\n        .selected { background-color: #EEE; color: #369; }\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDisplayComponent);
    return HeroDisplayComponent;
})();
exports.HeroDisplayComponent = HeroDisplayComponent;
//# sourceMappingURL=heroDisplay.js.map