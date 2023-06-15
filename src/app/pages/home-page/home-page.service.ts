import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/user.model';
import { AbstractService } from '../../services/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageService extends AbstractService<UserModel> {

  constructor(http: HttpClient) { 
    super(http, 'home-page')
  }

  /*getAllUsers(): Observable<UserModel>{
    console.log(this.baseUrlService)
    return this.httpClient.get<UserModel>(this.baseUrlService);
  }*/
}
