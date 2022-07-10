import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from './autenticacao.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      // provide: cria um service do httpInterceptor
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      // multi: adiciona vários interceptors
      multi: true
    }
  ]
})
export class AutenticacaoModule { }
