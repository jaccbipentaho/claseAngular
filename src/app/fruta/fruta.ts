import {Component, OnInit} from '@angular/core'


@Component({
  selector:'fruta',
  templateUrl: './fruta.component.html',
  styleUrls:['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  public nombre_componente='Fruta Componente';
  public listado_fruta='pera, manzana y sandia';

  public nombre:string;
  public edad:number;
  public mayordeedad:boolean;
  public trabajos:Array<string>
  constructor(){
    this.nombre='Jose Cabrales';
    this.edad=28;
    this.mayordeedad=true;
    this.trabajos=['carpintero','albañol', 'maestro']
  }
  cambiarNombre(){
    this.nombre='Juan';
  }
  cambiarEdad(edad:number){
    this.edad=edad;
  }
  ngOnInit(){
    this.cambiarNombre();
    this.cambiarEdad(99);

    var uno=1;
    var dos=88;
    if(dos===88){
      let dos=222;
      console.log('Dentro del If: ' + dos);
    }
    console.log('Fuera del If: ' + dos);

  }
}
