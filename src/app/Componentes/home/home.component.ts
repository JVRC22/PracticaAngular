import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonasService } from 'src/app/Servicios/personas.service';
import { Persona } from 'src/app/Interfaces/persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMessage: boolean = false;
  message?: string;

  personas?: Persona[];

  username = localStorage.getItem('nombre');

  constructor(private personasService: PersonasService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.showMessage = params['showMessage'];
      this.message = params['message'];
    });
  }

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
