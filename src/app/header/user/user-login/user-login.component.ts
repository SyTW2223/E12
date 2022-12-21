import { Component, EventEmitter, Output } from '@angular/core';
import { LogInUser } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  @Output() LogInUserEvent = new EventEmitter();

  user: LogInUser = new LogInUser();

  constructor() {}

  ngOnInit(){
  }

  OnLoginSubmit(){
    //console.log(this.username);

    this.LogInUserEvent.emit(this.user);
  }
}
