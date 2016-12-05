import {Component, Input} from "@angular/core";

@Component({
    selector: 'widget-one',
    template: `<div>Widget with value: {{widgetValue}}</div>`
})

export class WidgetOneComponent {
    @Input() widgetValue = 'no value set';
}