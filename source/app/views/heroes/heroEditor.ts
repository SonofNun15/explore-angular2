import { Component, View, Input, FORM_DIRECTIVES } from 'angular2/angular2';
import { Hero, HeroesDataService } from './heroes.data';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'hero-editor',
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <h2>{{hero.name}} details!</h2>
        <div><label>Id:</label> {{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ng-model)]="hero.name" placeholder="name"></input>
        </div>
    `,
    styles: [`
    `],
})
export class HeroEditorComponent {
    @Input() hero: Hero;
    
    constructor(params: RouteParams, dataService: HeroesDataService) {
        let id = parseInt(params.get('id'), 10);
        this.hero = dataService.get(id);
    }
}

