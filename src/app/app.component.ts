import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticatedUser } from './models/authenticatedUser.model';
import { Role } from './models/role.model';
import { AuthenticatedUserService } from './pages/authentication/guards/authenticatedUser.service';
import { UserDetails } from './pages/authentication/models/user-details.model';
import { AuthenticationService } from './pages/authentication/services/authentication.service';
import { slideInAnimation } from './shared/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]

})
export class AppComponent {
  title = 'Agenda-Arquivos';
  Role = Role;
  currentUser: UserDetails;
  showMenu: boolean = false;
  itemsUser: MenuItem[];
  menuBar: boolean = true
  userAuthenticated: AuthenticatedUser;
  teste2: any

  constructor(private authService: AuthenticationService, private router: Router) {
}

ngOnInit() {
  var teste = setInterval( () => 
  {
    this.teste2 = (localStorage.getItem('currentUser'))
    console.log(this.teste2)
    if(this.teste2 != undefined){
      this.showMenu = true;
      var auxMenu = document.getElementById('col-menuLateral') as HTMLElement
      var auxMenuList = document.getElementById('menuLateral') as HTMLElement
      auxMenu.style.width = '235px'
      auxMenuList.style.left = '0px'
      clearInterval(teste);
    }
  }, 500)
  this.itemsUser = [
    {label: 'Usuario',icon: 'pi pi-user', command: () => this.router.navigate(['/pages/usuario'])},
    {label: 'Perfil',icon: 'pi pi-id-card',},
    {label: 'Aparelhos',icon: 'pi pi-tablet',},
  {label: 'Troca Senha',icon: 'pi pi-sync',},
  {label: 'Licença',icon: 'pi pi-bars',},
  {label: 'Log out',icon: 'pi pi-sign-out',command: () => this.logout()}
];
}

prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

logout() {
  var auxMenu = document.getElementById('col-menuLateral') as HTMLElement;
        var auxMenuList = document.getElementById('menuLateral') as HTMLElement;
        auxMenu.style.width = '0px'
        auxMenuList.style.left = '-235px';
        localStorage.removeItem('currentUser');
        this.userAuthenticated = new AuthenticatedUser();
        this.showMenu = false;
        this.router.navigate(['/auth/login'])
}

mostraMenu() {
  var auxMenu = document.getElementById('col-menuLateral') as HTMLElement;
  var auxMenuList = document.getElementById('menuLateral') as HTMLElement;
  if (this.showMenu != false) {
      if (this.menuBar == true) {
          auxMenu.style.width = '0px';
          auxMenuList.style.left = '-235px';
          this.menuBar = false;
      } else {
          this.menuBar = true;
          auxMenu.style.width = '235px';
          auxMenuList.style.left = '0px';
      }
  }

}

openList(value: number){
  // var height = ['360px', '140px', '40px'] 
   var height = ['90px', '220px', '90px'] 
   var accordion = document.getElementById(`accordion-content-${value}`) as HTMLElement;
   var colorTitleAccordion = document.getElementById(`item-menu-${value}`) as HTMLElement
   var colorIcon = document.getElementById(`icon-${value}`) as HTMLElement
   var seta = document.getElementById(`seta-${value}`) as HTMLElement
   if(accordion.style.height == '0px' || accordion.style.height == ''){
       accordion.style.height = height[value - 1]
       colorTitleAccordion.style.color = '#0D89EC';
       colorIcon.style.color = '#0D89EC';
       seta.style.color = '#0D89EC';
       seta.style.transform = 'rotate(180deg)';
   } else {
       accordion.style.height = '0px'
       colorTitleAccordion.style.color = '';
       colorIcon.style.color = '';
       seta.style.color = '';
       seta.style.transform = 'rotate(0deg)';
   }
   
}


}