import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Hero, HeroesDataService } from './heroes.data';
import { HeroComponents, HeroEditorComponent, HeroCreatorComponent } from './heroComponents';

@RouteConfig([
    { path: '/', component: HeroCreatorComponent, as: 'Home' },
    { path: '/:id', component: HeroEditorComponent, as: 'Detail' },
])
@Component({
    selector: 'hero-list',
    providers: [HeroesDataService],
})
@View({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HeroComponents, RouterOutlet],
    templateUrl: 'source/app/views/heroes/heroList.html',
    styles: [`
        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    `],
})
export class HeroComponent {
    public heroes: Hero[];
    
    constructor(private dataService: HeroesDataService) {
        this.heroes = dataService.getList();
    }
}
