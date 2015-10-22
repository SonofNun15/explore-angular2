import * as _ from 'lodash';

export interface Hero {
    id: number;
    name: string;
}

export interface IHeroesDataService {
    get(id: number): Hero;
    getList(): Hero[];
    create(hero: Hero): Promise<Hero[]>;
    getNextId(): number;
}

export class HeroesDataService implements IHeroesDataService {
    get(id: number): Hero {
        return _.find(HEROES, (x: Hero) => id == x.id);
    }
    
    getList(): Hero[] {
        return HEROES;
    }
    
    create(hero: Hero): Promise<Hero[]> {
        return new Promise((resolve: { (value?: Hero[]): void }): void => {
            HEROES.push(hero);
            resolve(HEROES);
        });
    }
    
    getNextId(): number {
        let lastHero: Hero = _.max(HEROES, (x: Hero) => { return x.id; });
        return lastHero.id + 1;
    }
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
