import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";


@Injectable()
export class JwtInterpector implements HttpInterceptor{
        constructor(private authenticatedUser: AuthenticationService) { }
    
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            // add auth header with jwt if account is logged in and request is to the api url
            const currentUser = this.authenticatedUser.currentUserValue;
            console.log(currentUser)
            if (currentUser && currentUser.jwtToken) {
                request = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${currentUser.jwtToken}`,
                        'License-Type': 'APP_WEB'
                    }
                });
            }
    
            return next.handle(request);
        }
    
}