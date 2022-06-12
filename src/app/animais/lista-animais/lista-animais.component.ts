import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) { }

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userNme = usuario.name ?? '';
      this.animaisService.listaDoUsuario(userNme).subscribe((animais) => {
        this.animais = animais;
      });
    })
  }

}
