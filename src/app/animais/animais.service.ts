import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Animais, Animal } from './animais';
import { TokenService } from '../autenticacao/token.service';
import { environment } from '../../environments/environment';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

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

  excluirAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id: boolean): Observable<boolean> {
    // pipe: manipular o fluxo da requisicao;
    // terceiro parametro do post - { oberserve: 'response' }: retorna o status da requisição
    return this.http
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' }).pipe(
      // mapTo: emite o valor passado por parametro
      mapTo(true),
      catchError((error) => {
        return error.status === NOT_MODIFIED ? of(false) : throwError(error);
      })
    )
  }
}
