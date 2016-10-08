import { Component } from '@angular/core';
//Hero类
export class Hero{
    id : number;
    name : string;
}

//装饰器
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input type="text" [(ngModel)]="hero.name" placeholder="name">
        </div>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero : Hero = {
        id : 1,
        name: 'Windstorm'
    };
}
