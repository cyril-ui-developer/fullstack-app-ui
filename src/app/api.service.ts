import { Http , Response, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()

export class ApiService {
  endpointUrl = 'posts/';
  endpointUrlUsers = 'users';
  endpointUrlProfile = 'profile/';
  endpointUrlPost = 'post/';
  messages = [];
  users = [];

  constructor( private http: HttpClient) { }

getMessages(userId) {
this.http.get<any>(this.endpointUrl  + userId).subscribe(res => {
this.messages  = res;
console.log(res);
});
}

// getMessages(userId): Observable<any[]> {
//   return this.http.get( this.endpointUrl  + userId )
//                   .map((response: Response) => {
//                     const result = response.json();
// console.log(result)
//                     return result;
//                   })
//                   .catch((error: Response | any) => {
//                      console.log(error.statusText);
//                      return Observable.throw(error.statusText);
//                   });
// }

// getUsers() {
// this.http.get<any>(this.endpointUrlUsers).subscribe(res => {
//     this.users = res;
// });
// }

getUsers() {
  this.http.get<any>(environment.path +  this.endpointUrlUsers).subscribe(res => {
      this.users = res;
  });
  }
getProfile(id) {
  return this.http.get(environment.path + this.endpointUrlProfile + id);
  }

  postMessage(message) {
    this.http.post(environment.path + this.endpointUrlPost, message ).subscribe(res => {
     //   this.users = res.json();
    });
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
// }

// loginUser(loginData) {
//   this.http.post(this.endpointUrlLogin, loginData ).subscribe(res => {
//     console.log( res )
//   })

// }

}
