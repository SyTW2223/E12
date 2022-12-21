import { Component, EventEmitter, Output } from '@angular/core';

import { User } from '../user'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent {
  @Output() createNewUserEvent = new EventEmitter();
  
  newUser: User = new User;

  constructor(){}

  ngOnInit(){}

  create(){
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }

}
