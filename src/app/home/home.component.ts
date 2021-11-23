import { Component, OnInit } from "@angular/core";
import { RopaService } from "../service/ropa.service";

@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  styleUrls:['home.component.scss'],
  providers:[RopaService]
})

export class HomeComponent implements OnInit{
  public nombreservicio:string='';
  public listado_ropa:Array<string>=[];
  public prenda_a_guardar:string='';
  public fecha:Date=new Date();
  public valoruno:any;
  public valordos:any;
  titulo='Esta es la pagina Home'
  public nombre="Jose antonio Cabrales"
  constructor(
    private _ropaService:RopaService
  ){
    this.valoruno=5;
    this.valordos=12;

  }

  ngOnInit(){
    this.nombreservicio=this._ropaService.prueba();
    this.listado_ropa=this._ropaService.getRopa();
  }
  guardarRopa(){

    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar="";
  }
  eliminarPrenda(i:number){
    this._ropaService.deleteRopa(i);
  }


}
