import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ButtonModule } from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card'
import {PasswordModule} from 'primeng/password';
import {ImageModule} from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { HomePageService } from './home-page.service';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CardModule,
    PasswordModule,
    ImageModule
  ],
  providers:[HomePageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
