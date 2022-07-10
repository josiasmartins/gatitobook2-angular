import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animais, Animal } from './animais';
import { TokenService } from '../autenticacao/token.service';
import { environment } from '../../environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    // const token = this.tokenService.retornaToken();
    // append: possibilita ter varios atributos
    // const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Animal> {
    // const token = this.tokenService.retornaToken();
    // const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }
}
