import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
  path: '',
  component: UsuarioComponent
  },
  {
    path: 'new',
    component: NovoUsuarioComponent
  },
  {
    path: 'view/:id',
    component: NovoUsuarioComponent
  },
  {
    path: 'edit/:id',
    component: NovoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
