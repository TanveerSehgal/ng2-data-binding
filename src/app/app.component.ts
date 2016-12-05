import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1> <div>{{purpose}}</div>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular 2 Data Binding';
    purpose = 'You will learn how to bind data to your view in Angular 2';
}
