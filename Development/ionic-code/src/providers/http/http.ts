import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
  }

  getRequest<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
  }

  postRequest<T>(url: string, body?: object, options?: any) {
    return this.http.post<T>(url, body, options);
  }

}
