import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {
    getHeroes() {       
        var HEROES: Hero[] = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];            
        //return [{ "id": "001", "name": "test" }, { "id": "002", "name": "test2" }, { "id": "003", "name": "test3" }];
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix  
}