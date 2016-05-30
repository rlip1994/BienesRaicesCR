import {Component} from "angular2/core";
import {test2Component} from "./test2.component";
@Component({
    selector: "test",
    template: '<label >name</label> <br> <input [(ngModel)]="x" type="text"> <ul><li *ngFor="#fruit of fruits" (click)="tocao(fruit)"> {{fruit}} </li></ul> <test2 [fruit]="toca"></test2> <br> <button type="text" (click)="clicked()">Click</button>',
    directives:[test2Component]
})

export class testComponent{
    public fruits = ["Banana", "Orange", "Apple", "Mango"];
    public x = "";
    public toca = "nada"
    public clicked(){
        
        this.fruits.push(this.x);
        
    }
    
    public tocao(x){
        this.toca=x
    }
}