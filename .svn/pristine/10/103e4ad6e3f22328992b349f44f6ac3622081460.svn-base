import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from "@angular/http";
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

  postRequest<T>(url: string, body?, options?: any) {
    return this.http.post<T>(url, body, options);
  }

  authenticate(uid: any, password: any) {
    return this.http.post("http://192.168.51.25:8080/loginPro", {
      "uid": uid,
      "password": password
    })


  }
}

   
  
