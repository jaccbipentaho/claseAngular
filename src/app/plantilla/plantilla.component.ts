import { Component, OnInit } from "@angular/core";

@Component({
  selector:'plantilla',
  templateUrl:'./plantilla.component.html'
})

export class PlantillaComponent implements OnInit{
  public titulo='Plantilla component'
  public administrador:boolean;
  constructor(){
    this.administrador=true;
  }
  ngOnInit(){

  }
  cambiar(value:boolean){
    this.administrador=value;
  }
}
