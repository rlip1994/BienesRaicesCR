import {Component} from "angular2/core";

@Component({
    selector: "propiedad",
    template: '<div> Precio: {{propi.precio}}<br> Direccion: {{propi.direccion}} </div>',
    inputs: ["propi"]
})

export class PropiedadComponent{
    
    
    public propi = {};
    
}