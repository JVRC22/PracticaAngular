import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';	
import { Usuario } from 'src/app/Interfaces/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup;
  usuario : Usuario;
  constructor(private usuariosService: UsuariosService,fb:FormBuilder,validator:Validators ) {
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

  onLogin(){
      this.usuariosService.login(this.usuario).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token)},
        (error: any) => {console.log(error)}
      );
      }
}
 

 
