import { Component, Input, Output, CORE_DIRECTIVES, EventEmitter } from 'angular2/angular2';
import { Hero } from './heroes.data';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'hero-item',
    directives: [CORE_DIRECTIVES, RouterLink],
    template: `
        <li [ng-class]="getSelectedClass()" (click)="onSelect()">
            <a [router-link]="['./Detail', {id: hero.id}]">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </a>
        </li>
    `,
    styles: [`
        li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        li:hover {color: #369; background-color: #EEE; left: .2em;}
        li .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
    `],
})
export class HeroDisplayComponent {
    @Input() hero: Hero;
    @Input() selected: boolean;
    @Output() select: EventEmitter; 

    constructor() {
        this.select = new EventEmitter();
    }

    onSelect() {
        this.selected = !this.selected;
        this.select.next(this.selected);
    }

    getSelectedClass() {
        return { 'selected': this.selected };
    }
}
