export class AuthenticatedUser {

    jwtToken?: string;
    authorities?: any[];
    id?: number;
    name: string;
    status?: string;
    userName: string;
}