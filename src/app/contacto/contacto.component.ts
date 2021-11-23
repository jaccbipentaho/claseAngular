import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
@Component({
  selector:'contato',
  templateUrl: './contacto.component.html',
  styleUrls:['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {
  titulo='Este es la página de contacto';
  public parametro: string;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router)
    {
      this.parametro='';
    }
  ngOnInit(){
   this.parametro =this._route.snapshot.params[('page')];
    /*this._route.params.forEach((params:Params) => {
           this.parametro = params['page'];
    });*/

  }
  redirigir(){
    this._router.navigate(['contacto'])
  }
  redirigirahome(){
    alert('Aqui')
    this._router.navigate(['/home'])
  }
}
