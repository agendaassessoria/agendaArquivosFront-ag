import { BaseModel } from "../models/base.model";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { catchError, Observable, of } from "rxjs";
import { ResponseModel } from "../models/response.model";


export class AbstractService<T extends BaseModel> {

    public baseUrlService: string;

    constructor(
        public httpClient: HttpClient,
        public endpoint?: string,
      ) {
         this.baseUrlService = environment.api + this.endpoint;
      }

      get(identifier: number): Observable<T> {
        return this.httpClient.get<T>(this.baseUrlService + identifier)
          .pipe(catchError(this.handleError('get identifier = ' + identifier)));
      }

      getAll():Observable<T[]> {
        return this.httpClient.get<T[]>(this.baseUrlService)
      }

      public handleError(operation = 'operation', result?: T | ResponseModel) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

}