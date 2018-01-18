import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: Object = {};
  messages: any;

  constructor(private apiService: AuthService) {}

  ngOnInit() {
  }

post() {
console.log(this.loginData)
this.apiService.loginUser(this.loginData)
}
}
