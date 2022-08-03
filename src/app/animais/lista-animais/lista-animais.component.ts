import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.usuarioService.retornaUsuario().subscribe((usuario) => {
    //   const userNme = usuario.name ?? '';
    //   this.animaisService.listaDoUsuario(userNme).subscribe((animais) => {
    //     this.animais = animais;
    //   });
    // })
    //outra forma de fazer (melhore prática)
    // this.animais$ = this.usuarioService.retornaUsuario().pipe(
    //   // switchMap: é um Observer troca o fluxo
    //   // recebe como parametro, o retorno do primeiro observer
    //   switchMap((usuario) => {
    //     const userName = usuario.name ?? '';
    //     return this.animaisService.listaDoUsuario(userName);
    //   })
    // );
    this.activedRouter.params.subscribe(param => {
      this.animais = this.activedRouter.snapshot.data['animais'];
    })
  }

}
