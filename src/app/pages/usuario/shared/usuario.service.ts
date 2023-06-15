import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserModel } from '../../../models/user.model';
import { UsuarioModel } from '../../../models/usuario.model';
import { AbstractService } from '../../../services/abstract.service';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService extends AbstractService<UsuarioModel>{
  
  private userSubject: BehaviorSubject<UserModel>;

  constructor(private http: HttpClient) { 
    super(http, 'accounts/')
  }

  getAllUsers(): Observable<UserModel[]> {
      console.log(this.baseUrlService)
    return this.http.get<UserModel[]>(this.baseUrlService)
  }

  getById(id: Number): Observable<UsuarioModel>{
    console.log('entrou', id)
    return this.http.get<UsuarioModel>(this.baseUrlService + id )
  }

  delete(id): Observable<UserModel>{
    console.log(this.baseUrlService)
    console.log(id)
    return this.http.delete<UserModel>(this.baseUrlService + id)
  }

  create(entity: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(this.baseUrlService, entity)
  }
}
