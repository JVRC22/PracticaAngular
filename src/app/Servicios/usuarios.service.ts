import { Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Validator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://127.0.0.1:8000/api';
  token?: string;

  isAdministrator():Observable<boolean>{
    return this.http.get<boolean>(this.url + '/isAdministrator');
  }

  register(usuario: Usuario)
  {
    return this.http.post<Usuario>(this.url + '/register', usuario).pipe(retry(3));
  }

  login(usuario: Usuario)
  {
    return this.http.post<any>(this.url + '/login', usuario).pipe(retry(3));
  }

  logout()
  {
    return this.http.get(this.url + '/logout').pipe(retry(3));
  }
}
