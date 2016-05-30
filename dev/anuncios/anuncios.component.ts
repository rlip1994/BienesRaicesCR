import {Component} from "angular2/core";

@Component({
    selector: "anuncios",
    template: '<input [(ngModel)]= "anuncio.nombre" type="text"> <div> Precio: {{anuncio.precio}}<br> Direccion: {{anuncio.direccion}} </div>',
    inputs: ["anuncio"]
})

export class AnunciosComponent{
    public anunciox= {};
}