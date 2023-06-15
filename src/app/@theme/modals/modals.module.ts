import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcluirDialogComponent } from './excluir-dialog/excluir-dialog.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ExcluirDialogComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalsModule { }
