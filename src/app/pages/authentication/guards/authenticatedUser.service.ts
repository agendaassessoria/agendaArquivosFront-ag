import { Injectable } from "@angular/core";
import { AuthenticatedUser } from "../../../models/authenticatedUser.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedUserService{

    userOn: AuthenticatedUser;

    constructor(){}

    getUserAuthenticated(userAuth: AuthenticatedUser){
        this.userOn = userAuth;
    }
}