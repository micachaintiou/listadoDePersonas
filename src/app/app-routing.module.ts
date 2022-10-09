import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';


const routes: Routes = [
  {path: '', component: PersonasComponent},
  {path: 'personas', component: PersonasComponent}, /* Hace que en localHost se muestre el componente de personas */
  {path: 'personas/agregar', component: FormularioComponent}, /* Agrega persona */
  {path: 'personas/:id', component: FormularioComponent}, /* Edita  */
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
