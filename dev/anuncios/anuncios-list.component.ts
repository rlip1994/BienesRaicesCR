import {Component} from "angular2/core";
import {AnunciosComponent} from "./anuncios.component";

@Component({
    selector: "anuncios-list",
    template: '<ul><li *ngFor="#anuncio of anuncios" (Click)="onSelect(anuncio)" > {{anuncio.nombre}} {{anuncio.descripcion}}</li></ul>  {{selectedAnuncio.nombre}}<anuncios [anuncio]="selectedAnuncio"></anuncios>',
    directives:[AnunciosComponent]
    
})

export class AnunciosListComponent{
    public anuncios = [
        {nombre:"casaLinda", descripcion:"es una vara hermosa", precio:2000,direccion:"del arbol de mango a la derecha"},
        {nombre:"casaFea", descripcion:"es una vara fea", precio:5000,direccion:"del arbol de papaya a la derecha"}
    ];

    public selectedAnuncio ={};
    
    onSelect(x){
        this.selectedAnuncio= x;
    }
}