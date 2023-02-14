import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Persona } from 'src/app/Interfaces/persona';
import { PersonasService } from 'src/app/Servicios/personas.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {

  form: FormGroup;

  id: number = 0;
  persona?: Persona;

  constructor(private personasService: PersonasService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      ap_paterno: ['', Validators.required],
      ap_materno: ['', Validators.required],
      sexo: ['', Validators.required],
      f_nac: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getPersona();
  }

  getPersona() {
    this.personasService.mostrarUnico(this.id).subscribe(persona => {this.persona = persona; this.form.patchValue(persona)});
  }

  onSubmit(persona: Persona) {
    this.personasService.actualizarPersona(persona, this.id).subscribe(response => {console.log(response); this.router.navigate(['/home'], { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } });});
    
  }
}
