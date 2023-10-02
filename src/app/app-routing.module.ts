import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component'; // Importa el componente Persona

const routes: Routes = [
  { path: '', redirectTo: '/personas', pathMatch: 'full' }, // Ruta predeterminada, redirige a /personas
  { path: 'personas', component: PersonaComponent }, // Ruta para la lista de personas
  // Puedes agregar más rutas aquí según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



  exports: [RouterModule],
})
export class AppRoutingModule {}

