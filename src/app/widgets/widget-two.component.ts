import {Component, Input} from "@angular/core";

@Component({
    selector: 'widget-two',
    template: `<button [disabled]="isInactive">Click Me!</button>`
})

export class WidgetTwoComponent {
    @Input() isInactive = true;
}