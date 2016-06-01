import {Component} from 'angular2/core';
import {ContactComponent} from "./contact/contact.component";
import {PropiedadListComponent} from "./propiedades/propiedades-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    template: '<header>    <div>      <h1><a href="../index.html"><img src="../images/logo.jpg" alt=""></a></h1>            <div id="slide">        <div class="slider">          <ul class="items">            <li><img src="../images/slider-1.jpg" alt=""></li>            <li><img src="../images/slider-2.jpg" alt=""></li>            <li><img src="../images/slider-3.jpg" alt=""></li>          </ul>        </div>        <a href="#" class="prev"></a><a href="#" class="next"></a> </div>      <nav>        <ul class="menu">          <li class="current"><a href="../index.html">Main</a></li>          <li><a [routerLink]="["Buying"]">Buying</a></li>          <li><a [routerLink]="["Contact"]">Contact</a></li>        </ul>      </nav>    </div>  </header>',
    directives: [PropiedadListComponent,ROUTER_DIRECTIVES],
    styleUrls: ["../src/css/app.css"]
})

@RouteConfig([
    {path: '/buying', name: 'Buying', component: PropiedadListComponent},
    {path: '/contact', name: 'Contact', component: ContactComponent}
])

export class AppComponent {

}