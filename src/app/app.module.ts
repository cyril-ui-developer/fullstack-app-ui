import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { AuthInterceptorService } from './authInterceptor.service';


//import { HTTP_INTERCEPTORS } from '@angular/common/http/src/interceptor';

const routes = [
  { path: '', component: PostComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'login', component: LoginComponent },
 { path: 'users', component: UsersComponent},
 { path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    //HttpModule,
   MatToolbarModule,
   RouterModule.forRoot(routes),
   MatInputModule,
   BrowserAnimationsModule,
FormsModule,
   MatListModule,
   HttpClientModule
  ],
  providers: [ApiService, AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
