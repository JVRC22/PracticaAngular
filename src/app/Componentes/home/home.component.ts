import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Servicios/personas.service';
import { Persona } from 'src/app/Interfaces/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas?: Persona[];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas()
  {
    this.personasService.mostrarPersonas().subscribe(personas => {this.personas = personas});
  }

  putPersona(id: number)
  {}

  deletePersona(id: number)
  {}
}
