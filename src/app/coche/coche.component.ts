import { Component, OnInit } from "@angular/core";
import { coche } from "./coche";
import { PeticionesService } from "../service/peticiones.service";
import { publicacion } from "../service/publicaciones";
@Component({
  selector:'coche',
  templateUrl:'./coche.component.html',
  providers:[PeticionesService]

})

export class CocheComponent implements OnInit{
  public titulo='Componente Coche'
  public entidadcoche:coche=new coche("","","");
  public coches:Array<coche>=[];
  public publicaciones:any=[];

  constructor(private _peticionesservice:PeticionesService){

    this.coches=[
      new coche("Toyota Corolla","180","Blanco"),
      new coche("Camaro","110","Negro")
    ];
    this.publicaciones=[];

  }
  borrarcoche(index:number){

    this.coches.splice(index,1)

  }
  ngOnInit(){



    this._peticionesservice.getPosts().subscribe(
      result=>{
        this.publicaciones=result;
      },
      error=>{console.log}
    );


  }
  OnSubmit(entidad:coche){
    this.coches.push(this.entidadcoche);
    this.entidadcoche=new coche("","","");

  }
}
