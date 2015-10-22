/*

Best Angular 2 reference I have found yet:
http://victorsavkin.com/post/118372404541/the-core-concepts-of-angular-2

Last updated Oct 2015

*/

import { Component, bootstrap, provide, bind } from 'angular2/angular2';
import { HeroComponent } from './views/heroes/heroList';
import { PersonComponent } from './views/person/personList';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import {AppViewListener} from 'angular2/src/core/linker/view_listener.js';
import {DebugElementViewListener, inspectNativeElement} from 'angular2/src/core/debug/debug_element_view_listener';

@RouteConfig([
    { path: '/hero/...', component: HeroComponent, as: 'Hero' },
    { path: '/person', component: PersonComponent, as: 'Person' },
])
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, HeroComponent],
    template: `
        <h1>{{title}}</h1>
        <header>
            <ul>
                <li><a [router-link]="['/Hero', 'Home']">Heroes</a>
                <li><a [router-link]="['/Person']">People</a>
            </ul>
        </header>
        <router-outlet></router-outlet>
    `,
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ],
})
class AppComponent { 
    public title: string = 'My First Angular 2 App';
}
bootstrap(AppComponent, [
  bind(AppViewListener).toClass(DebugElementViewListener)
])
.then(applicationReference => {
  window['ng']['probe'] = inspectNativeElement; 
});
