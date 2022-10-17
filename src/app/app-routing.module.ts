import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';


const routes: Routes = [
  {path: '', component: PersonasComponent},
  {path: 'personas', component: PersonasComponent, children: /* Hace que en localHost se muestre el componente de personas */
  [
    {path: 'agregar', component: FormularioComponent}, /* Agrega persona */
    {path: ':id', component: FormularioComponent}, /* Edita  */ /* Se le puede quitar el personas/ ya que esta dentro del componente de personas */

  ]
  },
  {path:'**', component: ErrorComponent}, //Si se pone en el principio no localiza ninguna ruta
 /* {path: 'personas/agregar', component: FormularioComponent}, /* Agrega persona */
  /*  {path: 'personas/:id', component: FormularioComponent}, /* Edita  */
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
