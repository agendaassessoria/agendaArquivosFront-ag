import { BaseModel } from "./base.model";


export interface UserModel extends BaseModel{
    userId: number;
    name: string;
    email: string;
    password: string;
    jwtToken: string
}