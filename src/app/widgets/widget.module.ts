import {NgModule} from "@angular/core";

import {WidgetOneComponent} from './widget-one.component';
import {WidgetTwoComponent} from './widget-two.component';

@NgModule({
    imports: [],
    declarations: [
        WidgetOneComponent,
        WidgetTwoComponent
    ],
    exports: [
        WidgetOneComponent,
        WidgetTwoComponent
    ]
})

export class WidgetModule {}