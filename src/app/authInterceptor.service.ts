import { Http , Response, RequestOptions, Headers} from '@angular/http';
import { Injectable , Injector} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';

import {AuthService } from './auth.service'

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){

  }
intercept(req, next){
 console.log(req)
 const auth = this.injector.get(AuthService)
const authReq =  req.clone({
 headers:req.headers.set('Authorization' , 'token ' + auth.token)
})
return next.handle(authReq)
}

}
