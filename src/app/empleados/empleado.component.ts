import {Component, OnInit} from '@angular/core'
import { empleado } from './empleado';
@Component({
  selector:'empleados',
  templateUrl:'./empleado.component.html',
  styleUrls:['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {
  public empleado:empleado;
  public trabajadores:Array<empleado>;
  public titulo='Componente Empleados';
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;
  constructor(){
    this.trabajador_externo=false;
    this.color='green';
    this.color_seleccionado='blue';
    this.empleado=new empleado('Jose','Cabrales',21,'Sistemas',true);
    this.trabajadores=[
      new empleado('Jose','Cabrales',21,'Sistemas',true),
      new empleado('Leo','Cabrales',41,'Sistemas',true),
      new empleado('Josesito','Cabrales',31,'Sistemas',true),
      new empleado('Juan','Garcia',13,'Sistemas',true)
    ]
  }
  cambiar_externo(valor:boolean){
    this.trabajador_externo = valor;
  }
  ngOnInit(){

    console.log(this.empleado);

  }

}
