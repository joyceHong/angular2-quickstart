import { Component } from '@angular/core';
import { HeroDetailComponent } from './hero-detail';
@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>My Heroes</h2><hero-detail></hero-detail>',
    directives: [HeroDetailComponent]
})
export class AppComponent {
    title = 'Tour of Heroes';   
}