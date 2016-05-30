import {Component} from 'angular2/core';
import {AnunciosListComponent} from "./anuncios/anuncios-list.component";
import {testComponent} from "./contact/test.component";
import {PropiedadListComponent} from "./propiedades/propiedades-list.component";

@Component({
    selector: 'my-app',
    template: `<propiedades-list></propiedades-list>`,
    directives: [PropiedadListComponent],
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {

}