import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from './user.service';
import { LogInResponse, User } from './user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() username: string = "Mi Usuario";
  @Output() showPageEvent = new EventEmitter();

  user: User = new User;
  token: String = "";
  logedAlert: boolean = false;
  failAlert: boolean = false;
  showUserPage: boolean = false;
  userLoged: boolean = false;

  constructor(
    private userService_: UserService,
  ){}

  update(res: LogInResponse){
    if(res.success){
      this.username = res.user.name;
      this.token = res.token;
      this.user = res.user;
      this.userLoged = true;
      this.logedAlert = true;
      this.failAlert = false;
  } else {
      this.logedAlert = false;
      this.failAlert = true;
  }
  }

  showUserPageMethod(){
    this.showPageEvent.emit("Login");
  }

  showHomePageMethod(){
    this.showPageEvent.emit("Home");
  }

  editUser(user: User){
    this.userService_.update([user.username,user])
  }

  logOut(){
    this.username = "Mi Usuario";
    this.token = "";
    this.user = new User();
    this.userLoged = false;
  }
}
