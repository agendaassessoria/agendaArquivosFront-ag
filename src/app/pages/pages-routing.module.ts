import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '', 
  component: PagesComponent,
  children: [
    {
      path:'home-page',
      loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
    },
    {
      path: 'usuario',
      loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
      canActivate: [AuthGuard]
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home-page',
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
