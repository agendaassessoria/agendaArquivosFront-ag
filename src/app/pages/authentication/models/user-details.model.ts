import { Authorization } from "../../../models/authorization.model";
import { Role } from "../../../models/role.model";

export class UserDetails {
    id: number;
    name: string;
    username: string;
    password: string;
    authorities: Authorization[];
    jwtToken?: string;
    role: Role

    constructor(userDetails: UserDetails, Token: string) {
        this.id = userDetails.id;
        this.name = userDetails.name;
        this.username = userDetails.username;
        this.password = userDetails.password;
        this.jwtToken = Token;
    }
}