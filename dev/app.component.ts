import {Component} from 'angular2/core';
import {AnunciosListComponent} from "./anuncios/anuncios-list.component";
import {testComponent} from "./contact/test.component";

@Component({
    selector: 'my-app',
    template: `<test></test>`,
    directives: [testComponent],
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {

}