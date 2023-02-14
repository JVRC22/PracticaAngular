import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './Componentes/modificar/modificar.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { RegisterComponent } from './Componentes/User/register/register.component';
import { LoginComponent } from './Componentes/User/login/login.component';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarComponent,
    ModificarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
