import { UserDetails } from "../pages/authentication/models/user-details.model";

export class Response<T> {
    data: T;
    userDetails: UserDetails;
    errors: string[];
}
