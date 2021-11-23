import { Injectable } from "@angular/core";

@Injectable()

export class RopaService{
  public nombre_prenda='Pantalones Vaqueros'
  public coleccion_ropa=['Pantalones vaqueros','Camisetas']
  prueba(){
    return this.nombre_prenda;
  }
  addRopa(nombre_ropa:string){
    this.coleccion_ropa.push(nombre_ropa);
    return this.getRopa();

  }
  getRopa(){
    return this.coleccion_ropa;
  }
  deleteRopa(index:number){
    this.coleccion_ropa.splice(index,1);
    return this.getRopa();
  }


}
