import { Http , Response, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()

export class AuthService {
  endpointUrlRegister = 'auth/register';
  endpointUrlLogin = 'auth/login';
  messages = [];

  constructor( private http: HttpClient ) { }
TOKEN_KEY ="";

  get token(){
    return localStorage.getItem('token')
  }

  get isAuthticated(){
    return !!localStorage.getItem('token')
  }
  logout(){
    return localStorage.removeItem('token')
  }

// sendUserRegistion(registerData): Observable<any[]> {
//   return this.http.post(this.endpointUrlRegister, registerData )
//                   .map((response: Response) => {
//                     const result = response.json();
// console.log(result)
//                     return result;
//                   })
//                   .catch((error: Response | any) => {
//                      console.log(error.statusText);
//                      return Observable.throw(error.statusText);
//                   });
registerUser(registerData) {
  this.http.post<any>(environment.path + this.endpointUrlRegister, registerData ).subscribe(res => {
    console.log( res )
    localStorage.setItem('token', res.token)
  })

}
// loginUser(loginData) {
//   this.http.post(this.endpointUrlLogin, loginData ).subscribe(res => {
//     console.log( res )
//     localStorage.setItem('token', res.json().token)
//   })

// }
loginUser(loginData) {
  this.http.post<any>(environment.path + this.endpointUrlLogin, loginData ).subscribe(res => {
    console.log( res )
    localStorage.setItem('token', res.token)
  })

}
}
