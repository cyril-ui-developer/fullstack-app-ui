import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  messages: any = [];

 constructor(private apiService: ApiService, public authService: AuthService) {}

 ngOnInit() {
  //this.getMessages();
  console.log('this.messages')
 }

//  getMessages() {
//   this.apiService.getMessages().subscribe(
//     (data) => {  this.messages = data; }
//  //  (error) =>  {this.errorMsg = error; this.errorFlag = true}
//   )
//     console.log(this.messages)
//  }
}
