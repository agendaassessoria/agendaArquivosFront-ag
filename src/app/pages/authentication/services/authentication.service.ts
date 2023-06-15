import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxPermissionsService } from "ngx-permissions";
import { BehaviorSubject, map, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Authorization } from "../../../models/authorization.model";
import { JwtAuthentication } from "../../../models/jwt.authentication.model";
import { Response } from "../../../models/response";
import { Token } from "../../../models/token";
import { UserDetails } from "../models/user-details.model";


const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
};


@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserDetails>;
    public currentUser: Observable<UserDetails>;

    constructor(
        private http: HttpClient,
        private router: Router,
        private permissionsService: NgxPermissionsService
        ){
            this.currentUserSubject = new BehaviorSubject<UserDetails>(JSON.parse(localStorage.getItem('currentUser')));
            this.currentUser = this.currentUserSubject.asObservable();
        }

        public get currentUserValue(): UserDetails {
            return this.currentUserSubject.value
        }

        login(authentication: JwtAuthentication) {
            return this.http.post<Response<Token>>(`${environment.api}accounts/authenticate`, authentication, httpOptions)
                .pipe(map((response: any) => {
                    // login successful if there's a jwt token in the response
                    response.userDetails = response.jwtToken
                   localStorage.setItem('currentUser', JSON.stringify(response))
                    this.currentUserSubject.next(response.userDetails)
                  //  this.carregarPermissions(response.userDetails.authorities);
                    console.log(response.userDetails)
    
                    return response.userDetails;
                }));
        }



        carregarPermissions(autorieties: Authorization[]) {
            let permissions = autorieties.map(role => role.authority);
            this.permissionsService.loadPermissions(permissions);
        }

        logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            this.router.navigate(['/auth/login']);
        }

        refreshToken() {
            return this.http.post<any>(`${environment.api}/refresh-token`, {}, { withCredentials: true })
                .pipe(map((account) => {
                    this.currentUserSubject.next(account);
                    this.startRefreshTokenTimer();
                    return account;
                }));
        }

        private refreshTokenTimeout;
        private startRefreshTokenTimer() {
            // parse json object from base64 encoded jwt token
            const jwtToken = JSON.parse(atob(this.currentUserValue.jwtToken.split('.')[1]));
            // set a timeout to refresh the token a minute before it expires
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        }

        home() {
            this.router.navigate(['/']);
        }

        
    

}