import { Role } from "./role.model";
import { BaseModel } from './base.model';


export class UsuarioModel extends BaseModel {
    id: String
    name: String;
    email: String;
    password: String;
    confirmPassword: String;
    role: Role
}