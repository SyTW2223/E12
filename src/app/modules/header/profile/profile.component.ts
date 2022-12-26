import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() user: User = new User();
  @Output() updateUserEvent = new EventEmitter();
  @Output() LogOutEvent = new EventEmitter();
  public editUser: User = this.user;

  constructor(){}

  update(){
    this.editUser.editable = false;
    this.updateUserEvent.emit(this.editUser);  
  }

  logOut(){
    this.LogOutEvent.emit();
  }
}
