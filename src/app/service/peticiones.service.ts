import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { publicacion } from "./publicaciones";

import 'rxjs'

@Injectable()

export class PeticionesService{
  private publicaciones:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private _httpcliente:HttpClient){

  }
  getPrueba() {
    return 'desde el servicio';
  }
  getPosts() : Observable<publicacion>{
    return this._httpcliente.get(this.publicaciones).pipe(
      result=>result);
  }
}
