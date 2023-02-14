import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';	
import { Usuario } from 'src/app/Interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private usuariosService: UsuariosService, private fb: FormBuilder, private router: Router ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

   ngOnInit() {
     
   }

  onLogin(usuario: Usuario){
    this.usuariosService.login(usuario).subscribe(response => {localStorage.setItem('token', response.token)});
    this.router.navigate(['/home']);
    //{localStorage.setItem('token', response.token)},(error: any) => {console.log(error)});
  }
}
 

 
