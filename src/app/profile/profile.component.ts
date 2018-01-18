import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

  this.apiService.getProfile(id).subscribe(res => {
     this.profile = res;
   //  this.profile = res;
    })

  }

}
