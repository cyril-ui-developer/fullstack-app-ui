import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

   messages: any = [];

   constructor(private apiService: ApiService, private route: ActivatedRoute) {}

   ngOnInit() {
    this.getMessages();
    console.log('this.messages')
   }

   getMessages() {

    const userId = this.route.snapshot.params.id;
    console.log(userId)
  //   this.apiService.getMessages(userId).subscribe(
  //     (data) => {  this.messages = data; }
  //  //  (error) =>  {this.errorMsg = error; this.errorFlag = true}
  //   )
  //     //console.log(this.messages)
  //  }
  this.apiService.getMessages(userId)
    //console.log(this.messages)
 }
}
