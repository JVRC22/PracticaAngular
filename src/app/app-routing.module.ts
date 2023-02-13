import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'insertar', component: AgregarComponent },
  { path: 'modificar/:id', component: ModificarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
