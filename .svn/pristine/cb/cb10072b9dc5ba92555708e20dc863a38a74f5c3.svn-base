import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmployeeProvider {
  public API = 'http://localhost:8080';

  constructor(public http: HttpClient) {
    console.log('Hello EmployeeProvider Provider');
  }

  getDetails(value) {
    return this.http.post(this.API + '/initateemp', value);
  }
}
