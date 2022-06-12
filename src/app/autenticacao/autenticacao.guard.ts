import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad {

  constructor(
    private usuarioService: UsuarioService,
    private Router: Router
  ) {}

  // canLoad: cria um método com assinatura
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (!this.usuarioService.estaLogado()) {
        this.Router.navigate(['']);
        return false;
      } 

      return true;
  }
}
