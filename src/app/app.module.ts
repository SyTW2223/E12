import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserService } from './header/user.service'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './header/user/user.component';
import { UserNewComponent } from './header/user/user-new/user-new.component';
// import { UserDetailsComponent } from './profile/user/user-details/user-details.component';
//import { UserEditComponent } from './profile/user/user-edit/user-edit.component';
import { UserLoginComponent } from './header/user/user-login/user-login.component';
import { ProfileComponent } from './header/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    // UserListComponent,
    // UserDetailsComponent,
    // UserEditComponent,
    HeaderComponent,
    HomeComponent,
    UserLoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
