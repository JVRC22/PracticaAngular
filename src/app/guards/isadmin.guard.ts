import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuariosService } from '../Servicios/usuarios.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class IsadminGuard implements CanActivate {
  constructor(private usuariosService: UsuariosService, private route:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usuariosService.isAdministrator().pipe(map((
      isAdmin => {
        if (isAdmin) {
          return true;
        } else {
          this.route.navigate(['/home']);
          return false;
        }
      })));
  }
}
