import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonasService } from 'src/app/Servicios/personas.service';
import { Persona } from 'src/app/Interfaces/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas?: Persona[];

  local = localStorage.getItem('token');

  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas()
  {
    this.personasService.mostrarPersonas().subscribe(personas => {this.personas = personas});
  }

  putPersona(id: number)
  {
    this.router.navigate(['/modificar/', id]);
  }

  deletePersona(id: number)
  {
    if (confirm("¿Está seguro de eliminar la persona?"))
    {
      this.personasService.eliminarPersona(id).subscribe(response => location.reload());
    }
  }
}
