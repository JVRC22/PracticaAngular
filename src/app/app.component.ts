import { Component } from '@angular/core';
import { UsuariosService } from './Servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaAngular';

  token = localStorage.getItem('token');
  username = localStorage.getItem('nombre');

  constructor(private usuariosService: UsuariosService) { }

  cerrarSesion()
  {
    if (confirm("¿Está seguro de eliminar la persona?"))
    {
      this.usuariosService.logout().subscribe(response => location.reload());
      localStorage.clear();
    }
  }
}
