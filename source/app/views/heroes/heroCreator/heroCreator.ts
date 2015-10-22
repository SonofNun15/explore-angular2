import { Component, View, Input, Output, FORM_DIRECTIVES, EventEmitter } from 'angular2/angular2';
import { Hero, HeroesDataService } from '../heroes.data';

@Component({
    selector: 'hero-creator',
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <div>
            <label>Id:</label>
            <span>{{hero.id}}</span>
        </div>
        <div>
            <label>Name: </label>
            <input [(ng-model)]="hero.name" placeholder="name"></input>
        </div>
        <button (click)="save()">Save</button>
    `,
})
export class HeroCreatorComponent {
    @Output() create: EventEmitter;
    
    hero: Hero;
    
    constructor(private dataService: HeroesDataService) {
        this.create = new EventEmitter();
        this.hero = {
            id: dataService.getNextId(),
            name: '',
        };
    }
    
    save() {
        this.dataService.create(this.hero);
        this.create.next(this.hero);
    }
}
