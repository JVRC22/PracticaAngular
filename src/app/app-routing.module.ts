import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { LoginComponent } from './Componentes/User/login/login.component';
import { RegisterComponent } from './Componentes/User/register/register.component';
import { IsadminGuard } from './guards/isadmin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'insertar', component: AgregarComponent },
  { path: 'modificar/:id',canActivate:[IsadminGuard] ,component: ModificarComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
