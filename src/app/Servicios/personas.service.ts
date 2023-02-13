import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Interfaces/persona';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://127.0.0.1:8000/api/personas';

  mostrarPersonas() {
    return this.http.get<Persona[]>(this.url).pipe(retry(3));
  }

  agregarPersona(persona: Persona) {
    return this.http.post<Persona>(this.url, persona);
  }

  actualizarPersona(persona: Persona, id: number) {
    return this.http.put<Persona>(this.url + '/' + id, persona).pipe(retry(3));
  }

  eliminarPersona(id: number) {
    return this.http.delete<Persona>(this.url + '/' + id).pipe(retry(3));
  }

  mostrarUnico(id: number) {
    return this.http.get<Persona>(this.url + '/mostrar/' + id).pipe(retry(3));
  }
}
