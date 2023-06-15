import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/services/authentication.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent   {

  constructor( private authenticationService: AuthenticationService) { }

  goToHome() {
    this.authenticationService.home()
  }



}
