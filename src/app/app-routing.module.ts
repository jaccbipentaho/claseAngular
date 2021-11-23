import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { EmpleadoComponent } from './empleados/empleado.component';
import { FrutaComponent } from './fruta/fruta';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from './coche/coche.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

const routes: Routes = [
  {path:'', component:EmpleadoComponent},
  {path:'empleado', component:EmpleadoComponent},
  {path:'fruta', component:FrutaComponent},
  {path:'contacto/:page', component:ContactoComponent},
  {path:'home', component:HomeComponent},
  {path:'coche', component:CocheComponent},
  {path:'plantilla', component:PlantillaComponent},
  {path:'**', component:FrutaComponent}
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
