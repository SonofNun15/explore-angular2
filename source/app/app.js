/*

Best Angular 2 reference I have found yet:
http://victorsavkin.com/post/118372404541/the-core-concepts-of-angular-2

Last updated Oct 2015

*/
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
var heroList_1 = require('./views/heroes/heroList');
var personList_1 = require('./views/person/personList');
var router_1 = require('angular2/router');
var view_listener_js_1 = require('angular2/src/core/linker/view_listener.js');
var debug_element_view_listener_1 = require('angular2/src/core/debug/debug_element_view_listener');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My First Angular 2 App';
    }
    AppComponent = __decorate([
        router_1.RouteConfig([
            { path: '/hero/...', component: heroList_1.HeroComponent, as: 'Hero' },
            { path: '/person', component: personList_1.PersonComponent, as: 'Person' },
        ]),
        angular2_1.Component({
            selector: 'my-app',
            directives: [router_1.ROUTER_DIRECTIVES, heroList_1.HeroComponent],
            template: "\n        <h1>{{title}}</h1>\n        <header>\n            <ul>\n                <li><a [router-link]=\"['/Hero', 'Home']\">Heroes</a>\n                <li><a [router-link]=\"['/Person']\">People</a>\n            </ul>\n        </header>\n        <router-outlet></router-outlet>\n    ",
            providers: [
                router_1.ROUTER_PROVIDERS,
                angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [
    angular2_1.bind(view_listener_js_1.AppViewListener).toClass(debug_element_view_listener_1.DebugElementViewListener)
])
    .then(function (applicationReference) {
    window['ng']['probe'] = debug_element_view_listener_1.inspectNativeElement;
});
//# sourceMappingURL=app.js.map