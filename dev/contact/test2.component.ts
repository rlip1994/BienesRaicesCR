import {Component} from "angular2/core";

@Component({
    selector: "test2",
    template: '<label>{{fruit}}</label>',
    inputs:["fruit"]
})

export class test2Component{
    
    
    public fruit = "nada"
    
}