import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/authentication/guards/auth.guard';

const routes: Routes = [
    {
      path:'pages',
      canActivate: [AuthGuard],
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
    {path:'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
    {path: '', redirectTo:'pages', pathMatch: 'full' },
    {path: '**', redirectTo: 'pages'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
