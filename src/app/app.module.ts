import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { JwtInterpector } from './pages/authentication/interceptor/jwt.interceptor';
import { IniciarAplicacaoService } from './shared/iniciar-aplicacao.service';
import { AuthGuard } from './pages/authentication/guards/auth.guard';
import { services } from './services/config.services';
import { NgxPermissionsModule } from 'ngx-permissions';

export function init_app(appLoadService: IniciarAplicacaoService){
  return () => appLoadService.initializeEnvironment();
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TieredMenuModule,
    CardModule,
    BrowserAnimationsModule,
    AvatarModule,
    NgxPermissionsModule.forRoot()

  ],
  providers: [
    IniciarAplicacaoService,
    {provide: APP_INITIALIZER, useFactory:init_app, deps: [IniciarAplicacaoService], multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterpector, multi:true },
    {provide: APP_INITIALIZER, useFactory: (_iniciarAplicaoService: IniciarAplicacaoService) => async () => {
        return _iniciarAplicaoService.consultarDadosIniciaisAplicacao().then()},
      deps: [IniciarAplicacaoService],
      multi: true
    },
    AuthGuard,
    services
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
