import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proyectoangular';
  nombre:string="";


  ngOnInit(){
    this.nombre="José --Antonio Cabrales Cajina";

  }
}
