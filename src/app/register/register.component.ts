import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData: Object = {};
  messages: any;

  constructor(private apiService: AuthService) {}

  ngOnInit() {
  }

post() {
console.log(this.registerData)
this.apiService.registerUser((this.registerData)
}

}
