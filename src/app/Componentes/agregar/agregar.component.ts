import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PersonasService } from 'src/app/Servicios/personas.service';
import { Persona } from 'src/app/Interfaces/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  form: FormGroup;

  constructor(private personasService: PersonasService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      ap_paterno: ['', Validators.required],
      ap_materno: ['', Validators.required],
      sexo: ['', Validators.required],
      f_nac: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(persona: Persona) {
    this.personasService.agregarPersona(persona).subscribe(response => {console.log(response); this.router.navigate(['/home'], {queryParams: { showMessage: true, message: 'Persona agregada con exito.'}});});
  }
}