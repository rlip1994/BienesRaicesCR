import {Component} from "angular2/core";
import {PropiedadComponent} from "./propiedad.component";
@Component({
    selector: "propiedades-list",
    template: ' <ul class="list-1" ><li *ngFor="#propiedad of propiedades" (click)="tocar(propiedad)"><a href="#" > {{propiedad.nombre}} {{propiedad.descripcion}} </a></li></ul> <propiedad [propi]="toca"></propiedad>',
    directives:[PropiedadComponent]
})

export class PropiedadListComponent{

    public toca = {};
    
    
    public tocar(x){
        this.toca=x
    }
    
    public propiedades = [{nombre:"casaLinda", descripcion:"es una vara hermosa", precio:2000,direccion:"del arbol de mango a la derecha"},{nombre:"casaFea", descripcion:"es una vara fea", precio:5000,direccion:"del arbol de papaya a la derecha"}];
    
}