import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/api';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { DropdownModule } from 'primeng/dropdown';




@NgModule({
  declarations: [
    UsuarioComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsuarioRoutingModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CardModule,
    PasswordModule,
    ImageModule,
    TableModule,
    DynamicDialogModule,
    MessagesModule,
    MessageModule,
    DropdownModule
  ],
  providers:[DialogService, MessageService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class UsuarioModule { }
