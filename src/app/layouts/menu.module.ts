import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    LeftNavbarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class MenuModule { }
