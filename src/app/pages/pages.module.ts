import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { PagesComponent } from './pages.component';
import { ModalsModule } from '../@theme/modals/modals.module';
import { DialogService } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ModalsModule
  ],
  providers:[DialogService]

})
export class PagesModule { }
