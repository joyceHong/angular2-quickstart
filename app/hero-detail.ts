import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';
@Component({
    selector: '<hero-detail>',    
    template: '<ul><li *ngFor="let hero of heroes">{{hero.id}}  <span>{{hero.name}}</span></ul>',
    providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    constructor(private heroService: HeroService) { }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        // this.heroes = this.heroService.getHeroes();
    }
    ngOnInit() {
        this.getHeroes();
    }
}