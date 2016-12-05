import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public title : string = 'Angular 2 Data Binding';
    public purpose : string = 'You will learn how to bind data to your view in Angular 2';
    public widgetTwoDisabled : boolean = true;
    public inputWidgetValue : string = 'edit me!';

    toggleWidgetTwo() {
        this.widgetTwoDisabled = !this.widgetTwoDisabled;
    }
}
