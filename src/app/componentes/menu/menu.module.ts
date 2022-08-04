import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
